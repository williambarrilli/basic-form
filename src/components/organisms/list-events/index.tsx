import React from "react";
import styles from "./styles.module.scss";
import EventCard from "@/components/molecules/eventCard";

export default function EventList() {
  const eventList = [
    {
      eventName: "Tech Conference 2024",
      eventDate: "2024-12-15",
      company: "TechCorp",
      responsible: "John Doe",
    },
    {
      eventName: "Marketing Summit",
      eventDate: "2024-11-20",
      company: "MarketWorld",
      responsible: "Jane Smith",
    },
    {
      eventName: "AI Workshop",
      eventDate: "2024-10-05",
      company: "AI Innovations",
      responsible: "Alice Johnson",
    },
  ];

  return (
    <div className={styles.list}>
      {eventList.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}
