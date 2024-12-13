"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import EventCard from "@/components/molecules/eventCard";
import { fetchAllEvents } from "@/services/event.service";
import { EventDto } from "@/types";
import Link from "next/link";

export default function EventList() {
  const [eventList, setEventList] = useState<EventDto[]>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetchAllEvents();
      setEventList(response.data);
    };

    fetchEvent();
  }, []);

  return (
    <div className={styles.list}>
      {eventList.map((event, index) => (
        <Link href={`/home-event/${event.id}`} key={index}>
          <EventCard event={event} />
        </Link>
      ))}
    </div>
  );
}
