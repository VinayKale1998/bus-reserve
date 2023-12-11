import FromSuggestionList from "../../components/LandBodyComps/FromSuggestionList";
import ToSuggestionList from "../../components/LandBodyComps/ToSuggestionList";
import FromAutoSuggestionField from "../../components/LandBodyComps/FromAutoSuggestionField";
import ToAutoSuggestionField from "../../components/LandBodyComps/ToAutoSuggestionField";
import DatePicker from "../../components/LandBodyComps/DatePicker";
import SearchButton from "../../components/LandBodyComps/SearchButton";
import { ISearchDetails } from "../../types/mainComps/ISearchDetails";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { RootState } from "../../store/store";

const SearchForm = () => {
  const fromFieldRef = useRef<HTMLInputElement | null>(null);
  const toFieldRef = useRef<HTMLInputElement | null>(null);
  const state = useSelector(
    (state: RootState) => state.SuggestionSelectionSlice
  );
  const submitHandler = () => {
    const searchDetails: ISearchDetails = {
      fromPlaceId: state.fromPlaceId,
      toPlaceId: state.toPlaceId,
      date: state.date,
    };
    console.log(searchDetails);
  };

  return (
    <section className=" m-1 p-1 flex  items-start justify-center  overflow-hidden relative  min-h-[100vh]">
      <div>
        {" "}
        <FromAutoSuggestionField
          ref={fromFieldRef}
          uniqueKey="from"
          className="rounded-l-3xl w-[20vw] outline-none text-sm p-2  border-r-2 border-gray-300  min-h-[100px] bg-white flex flex-col justify-center  "
          placeholder="From"
          key="Pickup"
          type="text"
        />
        <FromSuggestionList className=""></FromSuggestionList>
      </div>
      <div>
        <ToAutoSuggestionField
          ref={toFieldRef}
          uniqueKey="to"
          className=" rounded-r-3xl w-[20vw] outline-none text-sm p-2  mr-1 min-h-[100px] bg-white flex flex-col justify-center "
          type="text"
          key="Destination"
          placeholder="To"
        ></ToAutoSuggestionField>
        <ToSuggestionList className=""></ToSuggestionList>
      </div>
      <DatePicker className="   outline-none text-sm    relative   " />
      <SearchButton submitHandler={submitHandler} />
    </section>
  );
};

export default SearchForm;
