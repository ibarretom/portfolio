import styles from "../../styles.module.css";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
}
export function Element({
  children,
  visible = false,
  className = "",
  ...rest
}: IProps) {
  return (
    <div
      className={`${styles["block__element"]} ${
        visible ? styles["block__element__visible"] : ""
      } ${styles["block_squares"]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
