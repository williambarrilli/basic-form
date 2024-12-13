import HomeEventTemplate from "@/components/template/home-event-template";
import React from "react";

export default function HomeEventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const { eventId } = params;

  return (
    <>
      <HomeEventTemplate eventId={eventId} />
    </>
  );
}
