import RegisterSubscribedTemplate from '@/components/template/register-subscribed-template'
import React from 'react'

export default async function RegisterSubscribedPage({
  params,
}: {
  params: { eventId: string }
}) {

  const { eventId } = await params

  return (
    <>
    <RegisterSubscribedTemplate eventId={eventId}/>
    </>
  )
}
