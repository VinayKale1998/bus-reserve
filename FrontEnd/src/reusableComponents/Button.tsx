import { FC, PropsWithChildren } from "react";
import { Ibutton } from "../types/reusables/Button";
const Button: FC<PropsWithChildren<Ibutton>> = ({
  type,
  className,
  onClick,
  children,
}: PropsWithChildren<Ibutton>) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
