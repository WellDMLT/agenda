"use client";

import useStore from "@/store/use-store";
import Step1 from "./example1";
import Step2 from "./example2";
import Step3 from "./example3";

const steps = [Step1, Step2, Step3];

const MultiStepForm = () => {
  const { currentStep } = useStore();
  const StepComponent = steps[currentStep];

  return (
    <div>
      <h1>Formulário de Múltiplos Passos</h1>
      <StepComponent />
    </div>
  );
};

export default MultiStepForm;
