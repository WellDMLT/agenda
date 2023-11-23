'use client'

import React from 'react';
import { useFormState } from './form-context';
import ServiceCard from '../cards/service-card';
import { UserNameForm } from './steps/step1';
import { EmailForm } from './steps/step2';
import { PasswordForm } from './steps/step3';
import Example from './steps/example';

function FormStep() {
  const {step}:any = useFormState()

  switch(step) {
    case 1:
      return <Example />

    // case 2:
    //   return <UserNameForm />

    case 2:
      return <EmailForm />

    case 3:
      return <PasswordForm />
  
    default:
      return null
  }

}

export default FormStep;