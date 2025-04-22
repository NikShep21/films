import styles from './ImagePlaceholder.module.scss'
import { GiFilmSpool } from "react-icons/gi";
interface Props extends React.HTMLAttributes<HTMLDivElement>{
    width: number;
    aspectRatio: string;
}
const ImagePlaceholder = ({width, aspectRatio, children}:Props) => {
  return (
    <div className={styles.imagePlaceholder} style={{ aspectRatio: aspectRatio, width: `${width}px`}}>
      <div className={styles.content}>
        <GiFilmSpool size={width/3}/>
        <p>{children}</p>
      </div>
    
    </div>
  )
}

export default ImagePlaceholder