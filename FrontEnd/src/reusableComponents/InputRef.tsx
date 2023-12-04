import React from "react";
import { IinputRef } from "../types/reusables/IinputRef";

const InputRef = React.forwardRef<HTMLInputElement, IinputRef>(
  function InputRef({ type, value, placeholder, className }: IinputRef, ref) {
    return (
      <input
        type={type}
        value={value}
        ref={ref}
        placeholder={placeholder}
        className={className}
      />
    );
  }
);

export default InputRef;
