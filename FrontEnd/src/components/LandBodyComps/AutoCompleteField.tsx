import React from "react";
import InputAutoSuggestion from "../../reusableComponents/InputAutoSuggestion";
import { IautoCompleteField } from "../../types/mainComps/AutoCompleteField";

const AutoCompleteField: React.FC<IautoCompleteField> = ({
  className,
  type,
  placeholder,
  uniqueKey,
}: IautoCompleteField): JSX.Element => {
  return (
    <InputAutoSuggestion
      uniqueKey={uniqueKey}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default AutoCompleteField;
