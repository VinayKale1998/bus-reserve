import { IinputRef } from "../../types/reusables/IinputRef";
import useFromAutoSuggestion from "../../hooks/useFromAutoSuggestion";

const FromAutoSuggestion = function InputRef({
  type,
  placeholder,
  className,
  uniqueKey,
}: IinputRef) {
  const { input, inputHandler } = useFromAutoSuggestion();

  return (
    <div className="flex flex-col m-1 p-1 space-x-1 space-y-1 items-start">
      <input
        type={type}
        id="from"
        key={uniqueKey}
        value={input}
        onChange={inputHandler}
        placeholder={placeholder}
        className={className}
        autoComplete="off"
      />
    </div>
  );
};

export default FromAutoSuggestion;
