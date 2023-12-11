import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { type FC } from "react";
import moment from "moment";
import { IDatePicker } from "../../types/mainComps/DatePicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { SuggestionSelectionSliceActions } from "../../store/slices/SuggestionSelectionSlice";

const DatePicker: FC<IDatePicker> = ({ className }: IDatePicker) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [fromattedDate, formatDate] = useState("");
  const [formattedDay, formatDay] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    formatDate(() => moment(selectedDate).format("DD MMM"));
    formatDay(() => moment(selectedDate).format("ddd"));

    if (selectedDate !== null) {
      dispatch(
        SuggestionSelectionSliceActions.setDate(selectedDate!.toISOString())
      );
    }
  }, [selectedDate]);

  const changehandler = (date: Date | null) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen && ""
        } flex flex-col items-start h-[100px] mx-1 rounded-3xl p-1 justify-center w-[8vw] bg-white`}
      >
        <span className="mx-auto">Date</span>
        <span className="text-xl flex space-x-4  items-center mx-2">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span className="font-bold">{fromattedDate}</span>
        </span>
        <span className="mx-auto">{formattedDay}</span>
      </button>
      {isOpen && (
        <ReactDatePicker
          className="datepicker" //react-datepicker is the class name internally
          selected={selectedDate}
          minDate={new Date()}
          dateFormat={"yyyy-MM-dd"}
          onChange={changehandler}
          onClickOutside={() => setIsOpen(false)}
          inline
        />
      )}
    </div>
  );
};

export default DatePicker;
