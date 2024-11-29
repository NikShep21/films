import { headers } from 'next/headers'
import styles from './BigCard.module.scss'
interface Card{
    card:any
}
const imagePath = 'https://image.tmdb.org/t/p'

const bigCard = ({card}:Card) => {
 
  console.log(card)
  if(!card[0]===undefined){
    return(
      <div className={styles.voidCard}>

      </div>
    )
  }
  return (
    <div className={styles.card}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>

        </div>
        <div className={styles.name}>{title}</div>
        <div className={styles.genres}></div>
        <div className={styles.overview}>{card.overview}</div>
      </div>
      <img className={styles.img}  src={`${imagePath}/w1280/${card? card.backdrop_path: null}`} alt="" />

    </div>
  )
}

export default bigCard