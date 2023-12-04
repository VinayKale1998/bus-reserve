import AutoCompleteField from "./components/AutoCompleteField";

function App(): JSX.Element {
  return (
    <div className="bg-red-400 min">
      <h1>hello</h1>
      <AutoCompleteField
        className=""
        placeholder="Enter Pickup"
        type="text"
        uniqueKey="fromField"
      />
      <AutoCompleteField
        className=""
        placeholder="Enter Destination"
        type="text"
        uniqueKey="toField"
      />
    </div>
  );
}

export default App;
