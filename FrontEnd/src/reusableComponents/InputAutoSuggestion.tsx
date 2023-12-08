import React, { useEffect, useState, useCallback } from "react";
import { IinputRef } from "../types/reusables/IinputRef";
import debounce from "lodash/debounce";
import { IPlaceSuggestion } from "../types/mainComps/IplaceSuggestion";
import { useDispatch, useSelector } from "react-redux";
import { fetchAutoSuggestion } from "../store/thunks/fetchSuggestionsThunk";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";
import { SuggestionSelectionSliceActions } from "../store/slices/SuggestionSelectionSlice";

const InputAutoSuggestion = React.forwardRef<HTMLInputElement, IinputRef>(
  function InputRef(
    { type, value, placeholder, className, uniqueKey }: IinputRef,
    ref
  ) {
    const [input, setInput] = useState("");
    const selectionState = useSelector(
      (state: RootState) => state.SuggestionSelectionSlice
    );
    const dispatch = useDispatch<AppDispatch>();
    const debouncedFetch = useCallback(
      debounce((input) => {
        dispatch(fetchAutoSuggestion(input));
      }, 500),
      [] // Dependencies array is empty, so this is created only once
    );

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(() => event.target.value);
    };

    useEffect(() => {
      if (input?.trim() !== "") {
        debouncedFetch.cancel();
        debouncedFetch(input);
      } else {
        dispatch(SuggestionSelectionSliceActions.removeSuggestions());
      }
    }, [input]);

    return (
      <div className="flex flex-col m-1 p-1 space-x-1 space-y-1 items-start">
        <input
          type={type}
          key={uniqueKey}
          value={value}
          ref={ref}
          onChange={inputHandler}
          placeholder={placeholder}
          className={className}
        />
        {selectionState.suggestions.length > 0 && input !== "" && (
          <div className="flex flex-col w-[20vw] text-xs bg-white rounded-md m-1 p-1">
            {selectionState.suggestions.map((item: IPlaceSuggestion) => (
              <h1 className="m-1 p-1" key={item.place_id}>
                {item.description}
              </h1>
            ))}

            {selectionState.error && <h1>{selectionState.error}</h1>}
          </div>
        )}
      </div>
    );
  }
);

export default InputAutoSuggestion;
