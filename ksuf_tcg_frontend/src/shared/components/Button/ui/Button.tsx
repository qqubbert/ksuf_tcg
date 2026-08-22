import styles from "./Button.module.css";

import type { ReactNode, MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  parentStyles?: string;
  isDisabled?: boolean;
};

export const Button = ({ onClick, children, type = "button", parentStyles = "", isDisabled = false }: Props) => {
  return (
    <button disabled={isDisabled} className={`${styles.button} ${parentStyles}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};