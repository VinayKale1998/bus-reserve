import FromSuggestionList from "../../components/LandBodyComps/FromSuggestionList";
import ToSuggestionList from "../../components/LandBodyComps/ToSuggestionList";
import FromAutoSuggestionField from "../../components/LandBodyComps/FromAutoSuggestionField";
import ToAutoSuggestionField from "../../components/LandBodyComps/ToAutoSuggestionField";
import DatePicker from "../../components/LandBodyComps/DatePicker";

const Body = () => {
  return (
    <section className=" m-1 p-1 flex  items-start justify-center  overflow-hidden relative  min-h-[100vh]">
      <div>
        {" "}
        <FromAutoSuggestionField
          uniqueKey="from"
          className="rounded-l-3xl w-[20vw] outline-none text-sm p-2 m-1 min-h-[80px] bg-white flex flex-col justify-center  "
          placeholder="From"
          key="Pickup"
          type="text"
        />
        <FromSuggestionList className=""></FromSuggestionList>
      </div>
      <div>
        <ToAutoSuggestionField
          uniqueKey="to"
          className=" rounded-r-3xl w-[20vw] outline-none text-sm p-2 m-1 min-h-[80px] bg-white flex flex-col justify-center "
          type="text"
          key="Destination"
          placeholder="To"
        ></ToAutoSuggestionField>
        <ToSuggestionList className=""></ToSuggestionList>
      </div>
      <DatePicker className=" mx-1  outline-none text-sm    min-h-[300px]   relative   " />
    </section>
  );
};

export default Body;
