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
     
       className={`${styles.btn} ${className}`}
       style={{ height: size, width: size }}
       {...props}
       
     >
       <div className={styles.arrowContainer}>
         <div
           className={type === "left" ? styles.arrowLeft : styles.arrowRight}
         ></div>
       </div>
     </button>
   );
 };
 
 export default ButtonSlider;