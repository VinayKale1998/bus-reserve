import { IinputRef } from "../../types/reusables/IinputRef";
import useFromAutoSuggestion from "../../hooks/useFromAutoSuggestion";

const FromAutoSuggestion = function InputRef({
  type,
  className,
  uniqueKey,
}: IinputRef) {
  const { input, inputHandler, focusHandler } = useFromAutoSuggestion();

  return (
    <div className={className}>
      <label className=" p-1">From</label>
      <input
        type={type}
        name="from"
        id="from"
        key={uniqueKey}
        value={input}
        className=" p-1 outline-none text-sm sm:text-md lg:text-lg xl:text-lg"
        onChange={inputHandler}
        onFocus={focusHandler}
        autoComplete="off"
      />
    </div>
  );
};

export default FromAutoSuggestion;
