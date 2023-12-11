import { IinputRefProps } from "../../types/reusables/IinputRefProps";
import useToAutoSuggestion from "../../hooks/useToAutoSuggestion";
import { TbLocation } from "react-icons/tb";
import { forwardRef } from "react";

const ToAutoSuggestion = forwardRef<HTMLInputElement, IinputRefProps>(
  ({ type, className, uniqueKey }: IinputRefProps, ref) => {
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
        } place-field  hover:bg-slate-100  `}
        onFocus={divFocusHandler}
        tabIndex={-1}
      >
        {isFocused && input.length == 0 && (
          <label className={`font-thin mx-2`}>To</label>
        )}
        {input.length !== 0 && <label className={`font-thin mx-2`}>To</label>}
        <div className="flex items-center">
          {" "}
          <span className="text-black text-3xl mx-2 ">
            <TbLocation></TbLocation>
          </span>
          {input.trim().length == 0 && !isFocused && (
            <label className={`text-xl font-bold mx-2`}>To</label>
          )}
          <input
            type={type}
            name="to"
            id="to"
            ref={ref}
            onFocus={focusHandler}
            key={uniqueKey}
            value={input}
            className={`${
              !isFocused && input.trim().length === 0 && ""
            } p-1 outline-none text-sm sm:text-md lg:text-lg xl:text-xl bg-transparent font-semibold  w-full  mx-2  `}
            onChange={inputHandler}
            onBlur={blurHandler}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
);

export default ToAutoSuggestion;
