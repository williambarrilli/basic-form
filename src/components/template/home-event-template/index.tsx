/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import { EventDto } from "@/types";
import Button from "@/components/molecules/button";
import { findOneEvent } from "@/services/event.service";

export default function HomeEventTemplate({ eventId }: { eventId: string }) {
  const [event, setEvent] = useState<EventDto | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await findOneEvent(eventId);
      setEvent(response as unknown as EventDto);
    };

    fetchEvent();
  }, [eventId]);
  console.log(event);
  return (
    <>
      <Header />
      <div className={styles.eventDetails}>
        {event && (
          <>
            {event.bannerUrl && (
              <div className={styles.banner}>
                <img
                  src={event.bannerUrl}
                  alt={`Banner do evento ${event.eventName}`}
                />
              </div>
            )}

            <h1>{event.eventName}</h1>
            <p>
              <strong>Data do Evento:</strong>{" "}
              {new Date(event.eventDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Empresa:</strong> {event.company}
            </p>
            <p>
              <strong>Responsável:</strong> {event.responsible}
            </p>
            <p>
              <strong>Descrição:</strong> {event.description}
            </p>
            <Button>Inscrever-se</Button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
