import HomeEventTemplate from "@/components/template/home-event-template";
export const dynamic = "force-dynamic";
export const dynamicParams = false;

export default async function HomeEventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  return (
    <>
      <HomeEventTemplate eventId={eventId} />
    </>
  );
}
