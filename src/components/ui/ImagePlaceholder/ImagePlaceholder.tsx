import styles from './ImagePlaceholder.module.scss'
import { GiFilmSpool } from "react-icons/gi";
interface Props{
    width: number;
    aspectRatio: string;
}
const ImagePlaceholder = ({width, aspectRatio}:Props) => {
  return (
    <div className={styles.imagePlaceholder} style={{ aspectRatio: aspectRatio, width: `${width}px`}}>
      <div className={styles.content}>
        <GiFilmSpool size={50}/>
        <p>No Image</p>
      </div>
    
    </div>
  )
}

export default ImagePlaceholder