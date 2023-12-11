import { IinputRefProps } from "../../types/reusables/IinputRefProps";
import useFromAutoSuggestion from "../../hooks/useFromAutoSuggestion";
import { SlLocationPin } from "react-icons/sl";
import { forwardRef } from "react";

const FromAutoSuggestion = forwardRef<HTMLInputElement, IinputRefProps>(
  ({ type, className, uniqueKey }: IinputRefProps, ref) => {
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
        }  place-field hover:bg-slate-100 overflow-hidden `}
        onFocus={divFocusHandler}
        tabIndex={-1}
      >
        {isFocused && input.length == 0 && (
          <label className={`font-thin mx-2`}>From</label>
        )}
        {input.length !== 0 && <label className={`font-thin mx-2`}>From</label>}

        <div className="flex items-center">
          {" "}
          <span className="text-black text-3xl mx-2 ">
            <SlLocationPin></SlLocationPin>
          </span>
          {input.trim().length == 0 && !isFocused && (
            <label className={`text-xl font-bold mx-2`}>From</label>
          )}
          <input
            type={type}
            name="from"
            id="from"
            ref={ref}
            key={uniqueKey}
            value={input}
            className={`${
              !isFocused && input.trim().length === 0 && ""
            } p-1 outline-none text-sm sm:text-md lg:text-lg xl:text-xl bg-transparent font-semibold w-full `}
            onChange={inputHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
);

export default FromAutoSuggestion;
