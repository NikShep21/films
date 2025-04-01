import MainPoster from '@/components/screens/mainPoster/MainPoster'
import styles from './page.module.scss'
import Poster from '@/components/screens/poster/Poster'
import SliderNowPlaying from '@/components/screens/sliders/sliderNowPlaying/SliderNowPlaying'
import SliderPopular from '@/components/screens/sliders/sliderPopular/SliderPopular'
import SliderTopRated from '@/components/screens/sliders/sliderTopRated/sliderTopRated'
import SliderVideos from '@/components/screens/sliders/SliderVideos/SliderVideos'

export default function Home() {
  
  return (
    <main>
      <div className={styles.bgColorContainer}>
        <MainPoster></MainPoster>
      </div>
      
        <div className={styles.SlidersContainer}>
          <SliderPopular/>
          <SliderTopRated/>
          <SliderVideos/>
          <SliderNowPlaying/>
        </div>
      

       

      
    </main>
  )
  
}
