import styles from './BigCard.module.scss'
interface Card{
    card:any
}
const imagePath = 'https://image.tmdb.org/t/p'

const bigCard = ({card}:Card) => {
 
  
  return (
    <div className={styles.card}>
      <img className={styles.img}  src={`${imagePath}/w1280/${card? card.backdrop_path: null}`} alt="" />
    </div>
  )
}

export default bigCard