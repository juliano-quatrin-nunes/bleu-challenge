import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { primary, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${styles.button} ${primary && styles.primary}`}
    >
      {children}
    </button>
  );
};

export default Button;
