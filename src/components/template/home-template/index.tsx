'use client'
import Button from '@/components/molecules/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HomeTemplate() {
  const router = useRouter()

  return (
<>
<h2>Home</h2>
<Button onClick={() => router.push('/login')} >Login</Button>
<Button onClick={() => router.push('/register')} >Registrar</Button>
</>  )
}
