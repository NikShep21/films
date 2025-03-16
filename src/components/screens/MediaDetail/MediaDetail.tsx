import React from 'react'
import styles from './MediaDetail.module.scss'
import { findMediaById, getVideos} from '@/api/response'
import useResponse from '@/hooks/useResponse'
import { getUrlImage,isMovie } from '@/utils/utils'
interface MediaDetailProps {
  type: 'movie' | 'tv'
  id: number
}
  
const MediaDetail = ({type,id}:MediaDetailProps)=> {

  const [data,isLoad,errors] = useResponse(()=>findMediaById(id,type))
  const [video,isLoadVideo,errorsVideo] = useResponse(()=>getVideos(id,type))
  console.log(data)
  console.log(video)
  // разобраться с isMovie во всем приложении !!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <>
      <main>
        
        <div className={styles.mainDescription} style={{backgroundImage:`linear-gradient(rgba(3,13,22,0.5),rgba(3,13,22,0.9)),url(${ data ? getUrlImage(data.backdrop_path, 'original'): null})`}}>
          <div className={styles.descriptionContainer}>
              <div className={styles.titleImageContainer}>
                {
                  data ? <img className={styles.image} src={getUrlImage(data.poster_path, 'w342')} alt="poster" /> : null
                }
                
              </div>
            <div className={styles.titleContainer}>
                <div className={styles.nameTitle}>
                  
                {data ? (isMovie(data) ? data.title : data.name) : null}
                  
                </div>
            </div>
          </div>

          
        </div>
        
      </main>
    </>
  )
}

export default MediaDetail