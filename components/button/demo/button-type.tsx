import React, { FunctionComponent } from "react";
import Button from "../button";

interface ButtonTypeProps {

}

const ButtonType: FunctionComponent<ButtonTypeProps> = () => {
  return (
    <Button type="primary">123123</Button>
  );
}

export default ButtonType;