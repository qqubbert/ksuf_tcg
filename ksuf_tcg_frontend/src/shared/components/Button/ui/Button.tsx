import styles from "./Button.module.css";

import type { ReactNode, MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  parentStyles?: string;
};

export const Button = ({ onClick, children, type = "button", parentStyles = "" }: Props) => {
  return (
    <button className={`${styles.button} ${parentStyles}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};