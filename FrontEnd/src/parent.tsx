import { type PropsWithChildren, type FC } from "react";

interface ParentProps {
  title: string;
}

const Parent: FC<ParentProps> = ({
  title,
}: PropsWithChildren<ParentProps>): JSX.Element => {
  return <div>{title}</div>;
};

export default Parent;
