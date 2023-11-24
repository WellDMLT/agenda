"use client";
import UseMultiform from "@/contexts/use-multiform";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const {
    formSteps,
    currentIndex,
    currentStep,
    goBackwards,
    goForwards,
    isFirstIndex,
    isLastStep,
  } = UseMultiform([
    <div key='1'>1</div>,
    <div key='2'>2</div>,
    <div key='3'>3</div>,
    <div key='4'>4</div>,
    <div key='5'>5</div>,
  ]);

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">{currentStep}</h1>
      <div>
        {!isFirstIndex && <button onClick={goForwards}>Prev</button>}
        <button onClick={goBackwards}>Next</button>
      </div>
    </main>
  );
}
