import FromSuggestionList from "../../components/LandBodyComps/FromSuggestionList";
import ToSuggestionList from "../../components/LandBodyComps/ToSuggestionList";
import FromAutoSuggestionField from "../../components/LandBodyComps/FromAutoSuggestionField";
import ToAutoSuggestionField from "../../components/LandBodyComps/ToAutoSuggestionField";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Body = () => {
  const fromDescription = useSelector((state: RootState) => {
    return state.SuggestionSelectionSlice.fromPlaceId;
  });
  const toDescription = useSelector((state: RootState) => {
    return state.SuggestionSelectionSlice.toPlaceId;
  });

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
      {fromDescription && (
        <h1 className="bg-white rounded-md m-1 p-1">
          <span>From:</span>
          {fromDescription}
        </h1>
      )}
      {toDescription && (
        <h1 className="bg-white rounded-md m-1 p-1">
          <span>To:</span>
          {toDescription}
        </h1>
      )}
    </section>
  );
};

export default Body;
