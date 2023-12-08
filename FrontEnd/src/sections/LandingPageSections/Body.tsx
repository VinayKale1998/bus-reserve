import AutoCompleteField from "../../components/LandBodyComps/AutoCompleteField";

const Body = () => {
  return (
    <section className=" m-1 p-1 flex  items-start justify-center  overflow-hidden">
      <AutoCompleteField
        className="rounded-md w-[20vw] outline-none text-sm p-1 m-1"
        placeholder="From"
        key="Pickup"
        type="text"
      ></AutoCompleteField>
      <AutoCompleteField
        className="rounded-md w-[20vw] outline-none text-sm  p-1 m-1"
        type="text"
        key="Destination"
        placeholder="To"
      ></AutoCompleteField>
    </section>
  );
};

export default Body;
