import { useEffect, useState } from 'react'
import styles from './Reviews.module.scss'
import useResponse from '@/hooks/useResponse'
import { getReviews } from '@/api/response'
import Review from './Review/Review'

interface Props {
    id:number,
    type:'movie'|'tv'
}
const Reviews = ({id,type}:Props) => {
    const [data, isLoad, errors] = useResponse(()=>getReviews(id,type))
    const [reviewsMassive, setReviewsMassive] = useState(Array(3).fill(null))
    useEffect(()=>{
      if(data){
        setReviewsMassive(data)
      }
    },[isLoad])
    
  return (
    <div className={styles.reviewsContainer}>
      {
        reviewsMassive.map((elem,id)=>(
          <Review key = {id} data = {elem}/>
        ))
      }
       
    </div>
  )
}

export default Reviews