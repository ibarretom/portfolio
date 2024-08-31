import { Point } from "../../models/Point";
import styles from "../../styles.module.css";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  point: Point;
}

export function Square({
  className = "",
  point,
  visible = false,
  ...rest
}: IProps) {
  return (
    <div
      className={`${styles["block__element__square"]} ${styles.block} ${
        visible ? styles["float-animation"] : ""
      } ${className}`}
      style={
        {
          "--grid-column-start": point.y,
          "--grid-row-start": point.x,
        } as React.CSSProperties
      }
      {...rest}
    ></div>
  );
}
