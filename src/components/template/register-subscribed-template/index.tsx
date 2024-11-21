import RegisterSubscribedForm from '@/components/organisms/register-subscribed-form'
import React from 'react'

export default function RegisterSubscribedTemplate({eventId}: {eventId: string}) {
  console.log(eventId)
  return (
    <>
        <RegisterSubscribedForm/>
    </>
  )
}
