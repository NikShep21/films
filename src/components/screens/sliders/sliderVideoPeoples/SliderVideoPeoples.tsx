import { getVideos } from '@/api/response';
import styles from './SliderVideoPeoples.module.scss'
import useResponse from '@/hooks/useResponse';
interface Props {
    id: number;
    type: 'movie' | 'tv'
}
const SliderVideoPeoples = ({id,type}:Props) => {
    const [data, isLoad, errors] = useResponse(() => getVideos(id,type));
    return (
        <div className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Now playing</div>
      </div>
      {/* <Slider<VideoType[]>
        data={data}
        isLoad={isLoad}
        maxWidthCard={400}
        renderItem={(item, index, widthCard) => (
            <Card key={index} data={item} widthCard={widthCard} />
          )}
      /> */}
    </div>
    )
    
}
export default SliderVideoPeoples