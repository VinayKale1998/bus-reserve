import { type FC, type PropsWithChildren } from "react";
import { Icard } from "../types/reusables/Card";

const Card: FC<PropsWithChildren<Icard>> = ({
  className,
  children,
}: PropsWithChildren<Icard>) => {
  return <div className={className}>{children}</div>;
};

export default Card;
