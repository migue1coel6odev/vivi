import classNames from "classnames";
import { DetailedHTMLProps } from "react";
import styles from "./button.module.css";

export type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "tertiary";
};
export function Button(props: ButtonProps) {
  const { children, className, variant = "tertiary", ...rest } = props;

  return (
    <button
      className={classNames(className, "border", {
        [styles.button_contained]: variant === "primary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
