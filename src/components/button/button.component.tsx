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
  const { children, className, variant = "tertiary", size = "medium", ...rest } = props;

  return (
    <button
      className={classNames(className, 'px-4 py-1 rounded-md cursor-pointer border', {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.tertiary]: variant === "tertiary",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
