import AutoCompleteField from "../../components/LandBodyComps/AutoCompleteField";
import Suggestions from "../../components/LandBodyComps/Suggestions";

const Body = () => {
  return (
    <section className=" m-1 p-1 flex  items-start justify-center  overflow-hidden">
      <div>
        {" "}
        <AutoCompleteField
          uniqueKey="from"
          className="rounded-md w-[20vw] outline-none text-sm p-1 m-1"
          placeholder="From"
          key="Pickup"
          type="text"
        ></AutoCompleteField>
        <Suggestions className=""></Suggestions>
      </div>
      <div>
        <AutoCompleteField
          uniqueKey="to"
          className="rounded-md w-[20vw] outline-none text-sm  p-1 m-1"
          type="text"
          key="Destination"
          placeholder="To"
        ></AutoCompleteField>
        <Suggestions className=""></Suggestions>
      </div>
    </section>
  );
};

export default Body;
