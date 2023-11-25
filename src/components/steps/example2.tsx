"use client";

import useStore from "@/store/use-store";
import { useEffect } from "react";

const Step2 = () => {
  const nextStep = useStore((state) => state.nextStep);
  const prevStep = useStore((state) => state.prevStep);
  const setFormData = useStore((state) => state.setFormData);

  const handleInputChange = (e) => {
    setFormData({ ...useStore.getState().formData, step2Data: e.target.value });
  };

  useEffect(() => {
    // Alguma lógica para a etapa 2, se necessário
  }, []);

  return (
    <div>
      <h2>Step 2</h2>
      <label>
        Data for Step 2:
        <input type="text" onChange={handleInputChange} />
      </label>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
