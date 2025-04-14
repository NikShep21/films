import styles from "./ButtonSlider.module.scss";
 
 interface ButtonSliderType extends React.HTMLAttributes<HTMLButtonElement> {
   type: "left" | "right";
   size: string;
 }
 const ButtonSlider = ({
   size,
   className = "",
   type,
   ...props
 }: ButtonSliderType) => {
   return (
     <button
     
       className={`${styles.btn} ${styles[type]} ${className}`}
       style={{"--size": size} as React.CSSProperties}
       {...props}
       
     >
       <div className={`${styles.lineTop}`}></div>
       <div className={styles.lineBottom}></div>
     </button>
   );
 };
 
 export default ButtonSlider;