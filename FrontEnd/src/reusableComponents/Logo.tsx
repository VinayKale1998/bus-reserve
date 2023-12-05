import { Ilogo } from "../types/reusables/Logo";
import { FC } from "react";

const Logo: FC<Ilogo> = ({ src, alt, className }: Ilogo) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Logo;
