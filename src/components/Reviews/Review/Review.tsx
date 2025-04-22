import MyImage from '@/components/ui/myImage/MyImage'
import styles from './Review.module.scss'
import {ReviewType} from '@/api/types'
import { getUrlImage } from '@/utils/utils'
import LoadCard from '@/components/ui/loadCard/LoadCard'

const Review = ({data}:{data:ReviewType | null}) => {
  return (
    <div className={styles.reviewContainer}>
         <div className={styles.imageContainer}>
          {
            data && data.author_details.avatar_path &&
            <MyImage borderRadius="50%" src={getUrlImage(data.author_details.avatar_path)} width='100%' aspect='1/1'/>
            
          }
          {
              data && !data.author_details.avatar_path &&
              <div></div>
          }
        </div>
        <div className={styles.content}>{data?.content}</div>
        <div className={styles.score}>9111</div>
    </div>
  )
}

export default Review