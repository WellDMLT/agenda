"use client";
import useStore from "@/store/use-store";
import { useEffect } from "react";

const Step1 = () => {
  const nextStep = useStore((state) => state.nextStep);
  const prevStep = useStore((state) => state.prevStep);
  const setFormData = useStore((state) => state.setFormData);

  const handleRadioChange = (e) => {
    setFormData({
      ...useStore.getState().formData,
      step1Data: e.target.value,
    });
  };

  useEffect(() => {
    // Alguma lógica para a etapa 2, se necessário
  }, []);

  return (
    <div>
      <h2>Step 1</h2>

      <div>
        <p>Choose an option:</p>
        <label>
          Option 1
          <input
            type="radio"
            name="radioOption"
            value="Option 1"
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Option 2
          <input
            type="radio"
            name="radioOption"
            value="Option 2"
            onChange={handleRadioChange}
          />
        </label>
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
