"use client";

import useStore from "@/store/use-store";
import { useState } from "react";

const Details = ({ data }: any) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const setFormData = useStore((state) => state.setFormData);
  const formData = useStore((state) => state.formData);

  const createAvailableTimes = () => {
    const startTime = 9; // 9 AM
    const endTime = 17; // 5 PM
    const interval = 30; // Intervalo de 30 minutos

    const availableTimes = [];

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const date = new Date(data); // Converte a string da data para um objeto Date
        date.setHours(hour, minute);
        availableTimes.push(date.toISOString());
      }
    }

    return availableTimes;
  };

  // Obtém a lista de horários disponíveis
  const availableTimesList = createAvailableTimes();

  const logger = selectedDateTime?.toISOString();

  function teste(time: any) {
    const selectedDate = new Date(time);
    setSelectedDateTime(selectedDate);

    setFormData({
      ...useStore.getState().formData,
      step2Data: selectedDate.toISOString(),
    });
  }

  return (
    <div>
      <h3>Horários Disponíveis:</h3>
      <ul className="flex flex-wrap gap-4">
        {availableTimesList.map((time, index) => (
          <li
            key={index}
            onClick={() => teste(time)}
            className="p-2 bg-rose-400 text-white rounded-md"
          >
            {new Date(time).toLocaleTimeString("pt-BR", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
