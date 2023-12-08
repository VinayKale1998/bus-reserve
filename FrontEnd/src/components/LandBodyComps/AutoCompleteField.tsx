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
