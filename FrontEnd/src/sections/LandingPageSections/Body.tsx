import FromSuggestionList from "../../components/LandBodyComps/FromSuggestionList";
import ToSuggestionList from "../../components/LandBodyComps/ToSuggestionList";
import FromAutoSuggestionField from "../../components/LandBodyComps/FromAutoSuggestionField";
import ToAutoSuggestionField from "../../components/LandBodyComps/ToAutoSuggestionField";
import DatePicker from "../../components/LandBodyComps/DatePicker";

const Body = () => {
  return (
    <section className=" m-1 p-1 flex  items-start justify-center  overflow-hidden">
      <div>
        {" "}
        <FromAutoSuggestionField
          uniqueKey="from"
          className="rounded-md w-[20vw] outline-none text-sm p-1 m-1"
          placeholder="From"
          key="Pickup"
          type="text"
        />
        <FromSuggestionList className=""></FromSuggestionList>
      </div>
      <div>
        <ToAutoSuggestionField
          uniqueKey="to"
          className="rounded-md w-[20vw] outline-none text-sm  p-1 m-1"
          type="text"
          key="Destination"
          placeholder="To"
        ></ToAutoSuggestionField>
        <ToSuggestionList className=""></ToSuggestionList>
      </div>
      <DatePicker />
    </section>
  );
};

export default Body;
