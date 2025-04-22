import React, { forwardRef } from "react";
import styles from "./LoadCard.module.scss";

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  width: string;
  aspect?: string;
  borderRadius?:string
  isText?:boolean
}

const LoadCard = forwardRef<HTMLDivElement, PropsType>(
  ({ height = "auto", width, aspect = "auto",borderRadius='null', className = "",isText=false,...rest }, ref) => {
    
    return (
      <div>

        <div
          ref={ref} 
          style={{width:width, aspectRatio: aspect, height: height, borderRadius:borderRadius }}
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
