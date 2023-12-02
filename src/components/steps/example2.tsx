"use client";

import { array } from "@/lib/helper";
import useStore from "@/store/use-store";
import { useState } from "react";
import Calendar from "../calender";
import { Button } from "../ui/button";

const Step2 = () => {
  const [active, nextStep, prevStep, setActive] = useStore((state) => [
    state.active,
    state.nextStep,
    state.prevStep,
    state.setActive,
  ]);

  const { setFormData } = useStore();

  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <main>
      <div className="w-full -mt-12 px-4">
        <div className="w-full overflow-x-scroll md:overflow-hidden md:flex md:justify-between flex gap-x-4">
          {array.map((item, i) => (
            <div
              // onClick={() => setActive(false)}
              key={item.id}
              className="h-32 p-4 bg-rose-500 rounded-md"
              //TODO tornar cada um deles unicos,
              //onde um card não abre o modal
              // de outro id
            >
              {item.nome}
            </div>
          ))}
        </div>

        <div className={`${active ? "flex-col" : "hidden"}`}>
          <Calendar
            data={data}
            showDetails={showDetails}
            showDetailsHandle={showDetailsHandle}
          />
        </div>
      </div>

      <div className="w-full flex gap-4 px-4">
        <Button className="w-full" onClick={prevStep}>
          Previous
        </Button>
        <Button className="w-full" onClick={nextStep}>
          Next
        </Button>
      </div>
    </main>
  );
};

export default Step2;
