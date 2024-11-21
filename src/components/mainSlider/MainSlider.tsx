'use client'
import styles from './MainSlider.module.scss'
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
interface SliderType{
    typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming",

}
const Slider = ({typeFilms}:SliderType) => {
    const [isLoad, errors, data] = useResponse(getMovieMassive, typeFilms);
    console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        
      </div>
    </div>
  )
}

export default Slider