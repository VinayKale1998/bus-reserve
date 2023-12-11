import Button from "../../reusableComponents/Button";

import { FC } from "react";

interface ISearchButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  submitHandler: () => void;
}

const SearchButton: FC<ISearchButtonProps> = ({
  submitHandler,
}: ISearchButtonProps) => {
  return (
    <Button
      className="bg-white mx-1 rounded-3xl text-xl p-2 min-h-[100px] hover:bg-purple-900 hover:text-white font-bold"
      type="button"
      onClick={submitHandler}
    >
      {" "}
      SEARCH BUSES
    </Button>
  );
};

export default SearchButton;
