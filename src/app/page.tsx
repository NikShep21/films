import MainPoster from '@/components/screens/mainPoster/MainPoster'
import styles from './page.module.scss'
import Poster from '@/components/screens/poster/Poster'

export default function Home() {
  
  return (
    <main>
      <div className={styles.bgColorContainer}>
        <MainPoster></MainPoster>
      </div>
      
        <div className={styles.container}>
          <Poster/>
        </div>
      

       

      
    </main>
  )
  
}
