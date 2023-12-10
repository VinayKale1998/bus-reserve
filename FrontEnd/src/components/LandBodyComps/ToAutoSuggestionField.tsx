import { IinputRef } from "../../types/reusables/IinputRef";
import useToAutoSuggestion from "../../hooks/useToAutoSuggestion";

const ToAutoSuggestion = function InputRef({
  type,
  className,
  uniqueKey,
}: IinputRef) {
  const { input, inputHandler, focusHandler } = useToAutoSuggestion();

  return (
    <div className={className}>
      <label className=" p-1">To</label>
      <input
        type={type}
        name="to"
        id="to"
        onFocus={focusHandler}
        key={uniqueKey}
        value={input}
        className=" p-1 outline-none text-sm sm:text-md lg:text-lg xl:text-lg"
        onChange={inputHandler}
        autoComplete="off"
      />
    </div>
  );
};

export default ToAutoSuggestion;
