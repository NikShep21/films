import React from 'react'
import styles from './MediaDetail.module.scss'
import { findMediaById, getVideos} from '@/api/response'
import useResponse from '@/hooks/useResponse'
import { getUrlImage } from '@/utils/utils'
interface MediaDetailProps {
  type: 'movie' | 'tv'
  id: number
}
  
const MediaDetail = ({type,id}:MediaDetailProps)=> {

  const [data,isLoad,errors] = useResponse(()=>findMediaById(id,type))
  const [video,isLoadVideo,errorsVideo] = useResponse(()=>getVideos(id,type))
  console.log(data)
  console.log(video)
  return (
    <>
      <main>
        
        <div className={styles.mainDescription} style={{backgroundImage:`linear-gradient(rgba(3,13,22,0.5),rgba(3,13,22,0.9)),url(${getUrlImage(data?.backdrop_path, 'original')})`}}>
          <div className={styles.descriptionContainer}>
            <div className={styles.titleColumn}>
              <div className={styles.titleImageContainer}>
                <img src={getUrlImage(data?.poster_path, 'w00')} alt="poster" />
              </div>
            </div>
            <div>

            </div>
          </div>

          
        </div>
        
      </main>
    </>
  )
}

export default MediaDetail