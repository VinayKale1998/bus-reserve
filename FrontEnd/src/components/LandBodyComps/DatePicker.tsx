import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { type FC } from "react";
import moment from "moment";

const DatePicker: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [fromattedDate, formatDate] = useState("");
  const [formattedDay, formatDay] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    formatDate(() => moment(selectedDate).format("DD MMMM"));
    formatDay(() => moment(selectedDate).format("ddd"));
  }, [selectedDate]);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen && "hidden"
        } bg-white  rounded-md m-1 p-1 relative flex flex-col items-center cursor-default`}
      >
        <span>Date</span>
        <span>{fromattedDate}</span>
        <span>{formattedDay}</span>
      </button>
      {isOpen && (
        <ReactDatePicker
          className=""
          selected={selectedDate}
          minDate={new Date()}
          dateFormat={"yyyy-MM-dd"}
          onChange={(date: Date | null) => {
            setSelectedDate(date);
            console.log(moment(date).format("YYYY-MM-DD-dd"));
            setIsOpen(false);
          }}
          onClickOutside={() => setIsOpen(false)}
          inline
        />
      )}
    </>
  );
};

export default DatePicker;
