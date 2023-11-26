"use client";
import useStore from "@/store/use-store";
import dynamic from "next/dynamic";

const getStepComponent = (step: number) => {
  switch (step) {
    case 1:
      return dynamic(() => import("@/components/steps/example1"));
    case 2:
      return dynamic(() => import("@/components/steps/example2"));
    case 3:
      return dynamic(() => import("@/components/steps/example3"));
    default:
      return null;
  }
};

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentStep = useStore((state) => state.currentStep);

  const StepComponent = getStepComponent(currentStep);

  return <div>{StepComponent && <StepComponent />}</div>;
}

export default page;
