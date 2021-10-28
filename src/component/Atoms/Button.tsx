import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  btnText?: String;
  onclick?: React.MouseEventHandler;
}

const { button, plum } = styles;

const Button = ({ btnText, onclick }: ButtonProps) => {
  return (
    <button onClick={onclick} className={true ? `${button} ${plum}` : plum}>
      {btnText}
    </button>
  );
};

export default Button;
