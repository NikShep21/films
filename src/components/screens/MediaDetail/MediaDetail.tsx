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
        
        <div className={styles.mainDescription} style={{backgroundImage:`url(${getUrlImage(data?.backdrop_path, 'original')})`}}>
          <div className={styles.descriptionContainer}></div>

          
        </div>
        
      </main>
    </>
  )
}

export default MediaDetail