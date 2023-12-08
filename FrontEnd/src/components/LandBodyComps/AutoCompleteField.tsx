import React, { useRef } from "react";
import InputAutoSuggestion from "../../reusableComponents/InputAutoSuggestion";
import { IautoCompleteField } from "../../types/mainComps/AutoCompleteField";

const AutoCompleteField: React.FC<IautoCompleteField> = ({
  className,
  type,
  placeholder,
  uniqueKey,
}: IautoCompleteField): JSX.Element => {
  const autoCompleteInputRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   const initializeAutocomplete = () => {
  //     if (!autoCompleteInputRef.current) return;

  //     const autocomplete = new window.google.maps.places.Autocomplete(
  //       autoCompleteInputRef.current,
  //       { types: ["(cities)"], componentRestrictions: { country: "IN" } }
  //     );

  //     autocomplete.addListener("place_changed", () => {
  //       const place = autocomplete.getPlace();
  //       console.log(place.place_id);
  //     });
  //   };

  //   loadGoogleMapsScript(uniqueKey)
  //     .then(initializeAutocomplete)
  //     .catch((error: Error) => {
  //       console.error("Error loading Google Maps script:", error);
  //     });
  // }, [uniqueKey]);

  return (
    <InputAutoSuggestion
      uniqueKey={uniqueKey}
      ref={autoCompleteInputRef}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default AutoCompleteField;
