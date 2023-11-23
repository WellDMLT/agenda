"use client";

import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import { add, format } from "date-fns";
import { IDateType } from "@/types/interface/IDateType";

interface Props {}

function CalendarComponent({}: Props) {
  const [date, setDate] = useState<IDateType>({
    justDate: null,
    dateTime: null,
  });

  console.log(date.dateTime);
  

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;
    const beginning = add(justDate, { hours: 8 });
    const end = add(justDate, { hours: 17 });
    const interval = 30; // minutes

    const times = [];

    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };
  const times = getTimes();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex gap-4 overflow-x-scroll w-[80vw]">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-md bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
                >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
}

export default CalendarComponent;
