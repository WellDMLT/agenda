"use client";
import useStore from "@/store/use-store";
import { useEffect } from "react";
import { Button } from "../ui/button";

const Step3 = () => {
  const formData = useStore((state) => state.formData);
  const resetStep = useStore((state) => state.resetStep);

  useEffect(() => {
    // Alguma lógica para exibir ou enviar os dados do resumo, se necessário
  }, []);

  return (
    <div>
      <h2>Summary</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <Button onClick={resetStep}>Inicio</Button>
    </div>
  );
};

export default Step3;
