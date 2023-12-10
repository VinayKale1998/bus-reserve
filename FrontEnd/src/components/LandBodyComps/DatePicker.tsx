import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { type FC } from "react";
import moment from "moment";
import { IDatePicker } from "../../types/mainComps/DatePicker";
import { FaRegCalendarAlt } from "react-icons/fa";

const DatePicker: FC<IDatePicker> = ({ className }: IDatePicker) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [fromattedDate, formatDate] = useState("");
  const [formattedDay, formatDay] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    formatDate(() => moment(selectedDate).format("DD MMM"));
    formatDay(() => moment(selectedDate).format("ddd"));
  }, [selectedDate]);
  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen && "hidden"
        } flex flex-col items-center h-[10vh]  rounded-md p-1  justify-center w-[8vw] bg-white`}
      >
        <span>Date</span>
        <span className="text-xl flex space-x-2  items-center">
          {" "}
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>{fromattedDate}</span>
        </span>
        <span>{formattedDay}</span>
      </button>
      {isOpen && (
        <ReactDatePicker
          className="relative left-10 min-h-[8vh] "
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
    </div>
  );
};

export default DatePicker;
