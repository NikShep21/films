import React from 'react'
import styles from './MediaDetail.module.scss'
import { findMediaById, getVideos} from '@/api/response'
import useResponse from '@/hooks/useResponse'
import { getUrlImage,isMovie } from '@/utils/utils'
import Score from '@/components/ui/score/Score'
import { run } from 'node:test'
import CustomLink from '@/components/ui/customLink/CustomLink'
interface MediaDetailProps {
  type: 'movie' | 'tv'
  id: number
}
  
const MediaDetail = ({type,id}:MediaDetailProps)=> {
  
  const [data,isLoad,errors] = useResponse(()=>findMediaById(id,type))
  const [video,isLoadVideo,errorsVideo] = useResponse(()=>getVideos(id,type))
  
  console.log(data)
  console.log(video)
   if (data){
    const title = isMovie(data) ? data.title : data.name;
    const releaseDate = isMovie(data) ? data.release_date : data.first_air_date;
    const runtime = isMovie(data) ? data.runtime : data.episode_run_time[0];
    console.log(runtime)
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
                  <div className={styles.nameTitleContainer}>

                   <div className={styles.nameTitle}>
                     {title}
                   </div>
                   <div className={styles.releaseDate}>
                    {releaseDate.slice(0,4)}
                   </div>

                  </div>
                <div className={styles.averageContainer}>
                  <p className={styles.average}>
                    <Score score={data.vote_average} />
                    
                  </p>
                    <p className={styles.releaseDate}>
                      {releaseDate}
                    </p>
                    <p className={styles.runtime}>
                      {runtime ? `${runtime} min` : null}
                    </p>
                  

                </div>
                <div className={styles.linkTrailer}>
                  <CustomLink href='#'>Watch trailer</CustomLink>
                </div>
               </div>
             </div>
   
             
           </div>
           
         </main>
       </>
     )
   }
}

export default MediaDetail