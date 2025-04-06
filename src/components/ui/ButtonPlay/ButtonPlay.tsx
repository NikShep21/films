import React from 'react'
import styles from "./ButtonPlay.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    width?: number;
}
const ButtonPlay = ({className="",width=60}:Props) => {
  return (
    <div className={className}>
        <div style={{"--size":`${width}px`} as React.CSSProperties} className={styles.buttonPlay}>
            <div className={styles.lineLeft}></div>
            <div className={styles.lineTop}></div>
            <div className={styles.lineBottom}></div>
        </div>
    </div>
  )
}

export default ButtonPlay