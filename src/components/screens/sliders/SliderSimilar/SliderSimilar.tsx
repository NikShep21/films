'use client'
import { getMassiveTitles, getSimilar } from '@/api/response'
import { MassiveMovieType, MassiveTvType } from '@/api/types'
import Card from '@/components/CardsSlider/card/Card'
import Slider from '@/components/slider/Slider'
import useResponse from '@/hooks/useResponse'
import styles from '../baseStyles.module.scss'
interface Props {
    id: number;
    type: "movie" | "tv";
  }
const SliderNowPlaying = ({id,type}:Props) => {
    
    const [data, isLoad, errors] = useResponse(()=> getSimilar(id,type))
    
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Similar</div>
      </div>
      <Slider<MassiveMovieType|MassiveTvType>
        data={data}
        isLoad={isLoad}
        maxWidthCard={169}
        renderItem={(item, index, widthCard) => (
            <Card key={index} data={item} widthCard={widthCard} />
          )}
      />
    </div>
  )
}

export default SliderNowPlaying