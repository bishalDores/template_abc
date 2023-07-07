import { ButtonType } from "@/types";
import React from "react";

const Button = ({ title, btnType, btnLink }: ButtonType) => {
  if (btnLink === "anchor") {
    return <a>Button</a>;
  } else {
    if (btnType === "primary") {
      return <button className="myBtn myBtn-primary">{title}</button>;
    } else {
      return <button className="myBtn myBtn-secondary">{title}</button>;
    }
  }
};

export default Button;
