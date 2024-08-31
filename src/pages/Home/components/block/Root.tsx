import { Block } from "../../models/Block";
import styles from "../../styles.module.css";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  block: Block;
}

export function Root({ children, block, className = "", ...rest }: IProps) {
  return (
    <div
      className={`${styles.block} ${className}`}
      style={
        {
          "--grid-column-start": block.columnStart.toString(),
          "--grid-row-start": block.rowStart.toString(),
        } as React.CSSProperties
      }
      key={`${block.columnStart}-${block.rowStart}`}
      {...rest}
    >
      {children}
    </div>
  );
}
