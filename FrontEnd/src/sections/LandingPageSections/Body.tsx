import FromSuggestionList from "../../components/LandBodyComps/FromSuggestionList";
import ToSuggestionList from "../../components/LandBodyComps/ToSuggestionList";
import FromAutoSuggestionField from "../../components/LandBodyComps/FromAutoSuggestionField";
import ToAutoSuggestionField from "../../components/LandBodyComps/ToAutoSuggestionField";
import DatePicker from "../../components/LandBodyComps/DatePicker";

const Body = () => {
  return (
    <section className=" m-1 p-1 flex  items-start justify-center  overflow-hidden relative ">
      <div>
        {" "}
        <FromAutoSuggestionField
          uniqueKey="from"
          className="rounded-l-3xl w-[20vw] outline-none text-sm p-2 m-1 h-[10vh] bg-white flex flex-col justify-center  "
          placeholder="From"
          key="Pickup"
          type="text"
        />
        <FromSuggestionList className=""></FromSuggestionList>
      </div>
      <div>
        <ToAutoSuggestionField
          uniqueKey="to"
          className=" rounded-r-3xl w-[20vw] outline-none text-sm p-2 m-1 h-[10vh] bg-white flex flex-col justify-center "
          type="text"
          key="Destination"
          placeholder="To"
        ></ToAutoSuggestionField>
        <ToSuggestionList className=""></ToSuggestionList>
      </div>
      <DatePicker className="rounded-3xl  outline-none text-sm   m-1 min-h-[10vh]   relative  overflow-hidden" />
    </section>
  );
};

export default Body;
