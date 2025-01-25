import React, { forwardRef } from "react";
import styles from "./LoadCard.module.scss";

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  width: string;
  aspect?: string;
  isText?:boolean
}

const LoadCard = forwardRef<HTMLDivElement, PropsType>(
  ({ height = "auto", width, aspect = "auto", className = "",isText=false,...rest }, ref) => {
    return (
      <div className={styles.loadContainer}>

        <div
          ref={ref} 
          style={{ aspectRatio: aspect, width: width, height: height }}
          className={`${styles.loadCard} ${className}`}
          {...rest}
        ></div>
        {
          isText ? 
          <div className={styles.text}>D</div>
          :
          null
        }
        
      </div>
    );
  }
);

export default LoadCard;
