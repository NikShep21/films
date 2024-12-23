import styles from './Slider.module.scss'
interface PropsType<T>{
    data:T,
    isLoad:boolean
}
const Slider = <T,>({data,isLoad}:PropsType<T>) => {
    return(
        
            <div className={styles.slider}>
                <div className={styles.sliderLine}>
                    
                </div>
            </div>
        
    )
}
export default Slider