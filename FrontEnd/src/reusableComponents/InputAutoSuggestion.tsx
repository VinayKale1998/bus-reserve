import { IinputRef } from "../types/reusables/IinputRef";
import useAutoSuggestion from "../hooks/useAutoSuggestion";

const InputAutoSuggestion = function InputRef({
  type,
  placeholder,
  className,
  uniqueKey,
}: IinputRef) {
  const { input, inputHandler } = useAutoSuggestion();

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
      />
    </div>
  );
};

export default InputAutoSuggestion;
