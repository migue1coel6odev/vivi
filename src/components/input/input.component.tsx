import { DetailedHTMLProps } from "react";
import classNames from "classnames";
import styles from "./input.module.css";

export type InputProps = Omit<
  DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size"
> & {
  size?: "small" | "medium" | "large";
};
export function Input(props: InputProps) {
  const { className, size = "medium", ...rest } = props;

  return (
    <input
      className={classNames(className, styles.input, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...rest}
    />
  );
}
