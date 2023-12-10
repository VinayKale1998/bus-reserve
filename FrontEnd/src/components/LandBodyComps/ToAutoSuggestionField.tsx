import { IinputRef } from "../../types/reusables/IinputRef";
import useToAutoSuggestion from "../../hooks/useToAutoSuggestion";

const ToAutoSuggestion = function InputRef({
  type,
  className,
  uniqueKey,
}: IinputRef) {
  const {
    input,
    inputHandler,
    focusHandler,
    isFocused,
    blurHandler,
    divFocusHandler,
  } = useToAutoSuggestion();

  return (
    <div
      className={`${className} ${
        isFocused ? "bg-slate-200" : "bg-white"
      } place-field  hover:bg-slate-200 overflow-hidden `}
      onFocus={divFocusHandler}
      tabIndex={-1}
    >
      <label
        className={`${
          input.trim().length === 0 && !isFocused && "text-2xl font-550"
        } font-thin `}
      >
        To
      </label>
      <input
        type={type}
        name="to"
        id="to"
        onFocus={focusHandler}
        key={uniqueKey}
        value={input}
        className={`${
          !isFocused && input.trim().length === 0 && "hidden"
        } p-1 outline-none text-sm sm:text-md lg:text-lg xl:text-xl bg-transparent font-semibold `}
        onChange={inputHandler}
        onBlur={blurHandler}
        autoComplete="off"
      />
    </div>
  );
};

export default ToAutoSuggestion;
