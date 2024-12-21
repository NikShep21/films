import React, { forwardRef } from "react";
import styles from "./LoadCard.module.scss";

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  width: string;
  aspect?: string;
}

const LoadCard = forwardRef<HTMLDivElement, PropsType>(
  ({ height = "auto", width, aspect = "auto", className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref} 
        style={{ aspectRatio: aspect, width: width, height: height }}
        className={`${styles.loadCard} ${className}`}
        {...rest}
      ></div>
    );
  }
);

export default LoadCard;
