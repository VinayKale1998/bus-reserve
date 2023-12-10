import { IinputRef } from "../../types/reusables/IinputRef";
import useFromAutoSuggestion from "../../hooks/useFromAutoSuggestion";

const FromAutoSuggestion = function InputRef({
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
  } = useFromAutoSuggestion();

  return (
    <div
      className={`${className} ${
        isFocused ? "bg-slate-200" : "bg-white"
      }  place-field hover:bg-slate-200 overflow-hidden `}
      onFocus={divFocusHandler}
      tabIndex={-1}
    >
      <label
        className={`${
          input.trim().length == 0 && !isFocused && "text-2xl "
        } font-thin`}
      >
        From
      </label>

      <input
        type={type}
        name="from"
        id="from"
        key={uniqueKey}
        value={input}
        className={`${
          !isFocused && input.trim().length === 0 && "hidden"
        } p-1 outline-none text-sm sm:text-md lg:text-lg xl:text-xl bg-transparent font-semibold`}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        autoComplete="off"
      />
    </div>
  );
};

export default FromAutoSuggestion;
