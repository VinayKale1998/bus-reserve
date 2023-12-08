//initally this is gonna have, Cancel Ticket, Show My Ticket, Sign In / Sign Up.

import Button from "../../reusableComponents/Button";
import Card from "../../reusableComponents/Card";
import { useState } from "react";

const Account = () => {
  const [showDropDown, setDropDown] = useState<boolean>(false);

  const clickHandler = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <Card className="Account-Dropdown flex flex-col  relative justify-start items-center text-white">
      <Button
        className="Account-butto  p-1 m-1"
        type="button"
        onClick={clickHandler}
      >
        {" "}
        Account
      </Button>
      {showDropDown && (
        <Card className="Dropdown-items flex flex-col  p-1  absolute top-[100%]  ">
          <Button className="Account-item p-1 m-1  " type="button">
            My Journey
          </Button>
          <Button className="Account-item p-1 m-1 " type="button">
            Cancel Journey
          </Button>
          <Button className="Account-item p-1 m-1 " type="button">
            My Ticket
          </Button>
        </Card>
      )}
    </Card>
  );
};

export default Account;
