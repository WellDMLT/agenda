'use client'

import {useState, ReactElement} from 'react'

const UseMultiform = (formSteps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  
  const goBackwards = () => {
    if(currentIndex === 0) return
    setCurrentIndex((prev) => prev + 1)
  }

  const goForwards = () => {
    if(currentIndex === formSteps.length - 1) return
    setCurrentIndex((prev) => prev + 1)
  }

  return {
    formSteps,
    currentIndex,
    currentStep: formSteps[currentIndex],
    goForwards,
    goBackwards,
    isFirstIndex: currentIndex === 0,
    isLastStep: currentIndex === formSteps.length - 1
  }
}

export default UseMultiform