import React from "react";
import styles from "./styles.module.scss";

interface EventCardProps {
  event: {
    eventName: string;
    eventDate: string;
    company: string;
    responsible: string;
  };
}
export default function EventCard({ event }: EventCardProps) {
  return (
    <div className={styles.card}>
      <h3>{event.eventName}</h3>
      <p>
        <strong>Data:</strong> {event.eventDate}
      </p>
      <p>
        <strong>Empresa:</strong> {event.company}
      </p>
      <p>
        <strong>Responsável:</strong> {event.responsible}
      </p>
    </div>
  );
}
