'use client'

import CalendarComponent from '@/components/calendar'
import ServiceCard from '@/components/cards/service-card'
import { FormProvider, useFormState } from '@/components/form/form-context'
import FormStep from '@/components/form/form-step'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const {onHandleNext}:any = useFormState()

  return (
   <main className='flex'>
    <FormProvider>
      <FormStep />
    </FormProvider>
    {/* <CalendarComponent /> */}
   </main>
  )
}
