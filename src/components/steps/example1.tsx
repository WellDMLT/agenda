"use client";
import { GettAllServicos } from "@/app/service/servicos";
import useStore from "@/store/use-store";
import { useQuery } from "react-query";
import { Button } from "../ui/button";

const Step1 = () => {
  const nextStep = useStore((state) => state.nextStep);
  const setFormData = useStore((state) => state.setFormData);

  const handleRadioChange = (e: any) => {
    setFormData({
      ...useStore.getState().formData,
      step1Data: e.target.value,
    });
  };

  const { data, isLoading } = useQuery<any[]>({
    queryKey: ["servicos"],
    queryFn: GettAllServicos,
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Step 1</h2>

      <div className="w-full flex p-4 gap-4">
        {data?.map((item: any, index: any) => (
          <div key={index}>
            <label className="p-4">
              <input
                type="radio"
                name="radioOption"
                value={item.nome}
                onChange={handleRadioChange}
                className=""
              />
              <span>{item.nome}</span>
            </label>
          </div>
        ))}
      </div>

      <Button
        onClick={nextStep}
        // disabled={!useStore.getState().formData.step1Data}
      >
        Next
      </Button>
    </div>
  );
};

export default Step1;
