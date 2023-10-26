import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  name: string;
  variant?: "primary" | "secondary" | "error";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ name, variant = "primary", ...rest }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} {...rest}>
      {name}
    </button>
  );
};

export default Button;
