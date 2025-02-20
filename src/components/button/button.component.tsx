import classNames from "classnames";
import { DetailedHTMLProps } from "react";
import styles from "./button.module.css";

export type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
};
export function Button(props: ButtonProps) {
  const { children, className, variant = "tertiary", ...rest } = props;

  return (
    <button
      className={classNames(className, 'p-2 rounded-lg', {
        [styles.button_primary]: variant === "primary",
        [styles.button_secondary]: variant === "secondary",
        [styles.button_tertiary]: variant === "tertiary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
