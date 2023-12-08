import React, { useEffect, useState } from "react";
import { IinputRef } from "../types/reusables/IinputRef";
import debounce from "lodash/debounce";
import axios from "axios";
import { IPlaceSuggestion } from "../types/mainComps/IplaceSuggestion";

const InputAutoSuggestion = React.forwardRef<HTMLInputElement, IinputRef>(
  function InputRef({ type, value, placeholder, className }: IinputRef, ref) {
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState("");
    const [debouncedFetch] = useState(() =>
      debounce((input) => fetchAutoSuggestion(input), 500)
    );

    const fetchAutoSuggestion = async (input: string) => {
      const suggestionURL = import.meta.env.VITE_SUGESTION_BASE_URL;
      const params = {
        input,
      };
      try {
        const response = await axios.get(suggestionURL, { params });
        setSuggestions(() => response.data);
        console.log(response.data);
      } catch (err) {
        setSuggestions(() => []);
      }
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event?.target.value.trim() !== "") {
        setInput(() => event.target.value);
      }
    };

    useEffect(() => {
      if (input?.trim() !== "") {
        debouncedFetch.cancel();
        debouncedFetch(input);
      } else {
        setSuggestions([]);
      }
    }, [input]);

    return (
      <div className="flex flex-col m-1 p-1 space-x-1 space-y-1 items-start">
        <input
          type={type}
          value={value}
          ref={ref}
          onChange={inputHandler}
          placeholder={placeholder}
          className={className}
        />
        {suggestions.length > 0 && input !== "" && (
          <div className="flex flex-col w-[20vw] text-xs bg-white rounded-md m-1 p-1">
            {suggestions.map((item: IPlaceSuggestion) => (
              <h1 className="m-1 p-1" key={item.place_id}>
                {item.description}
              </h1>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default InputAutoSuggestion;
