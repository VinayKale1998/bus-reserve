import { useRef, useEffect } from "react";
import { loadGoogleMapsScript } from "../utils/googleAPILoader";
import InputRef from "../reusableComponents/InputRef";
import { IautoCompleteField } from "../types/mainComps/AutoCompleteField";
// import _ from "lodash";

const AutoCompleteField: React.FC<IautoCompleteField> = ({
  className,
  type,
  placeholder,
}: IautoCompleteField): JSX.Element => {
  const autoCompleteInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.initializeAutocomplete = () => {
      if (!autoCompleteInputRef.current) return;

      const autocomplete = new window.google.maps.places.Autocomplete(
        autoCompleteInputRef.current!,
        { types: ["(cities)"], componentRestrictions: { country: "IN" } }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        console.log(place.place_id);
      });
    };

    loadGoogleMapsScript("initializeAutocomplete");

    return () => {
      delete window.initializeAutocomplete;
    };
  }, []);

  return (
    <InputRef
      ref={autoCompleteInputRef}
      type={type}
      placeholder={placeholder}
      className={className}
    ></InputRef>
  );
};

export default AutoCompleteField;
