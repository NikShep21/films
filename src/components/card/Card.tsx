import { MassiveMovie, MassiveTv } from '@/api/types'
import styles from './Card.module.scss'
import LoadCard from '../ui/loadCard/LoadCard'
interface Props{
    data: MassiveMovie | MassiveTv | null
}
const Card = ({data}:Props) =>{
    console.log(data)
    if(!data){
        return(
            <LoadCard
            aspect='720/200'
            width='200px'
            />
        )
    }
    
    return(
        <div>
            
        </div>
    )
}

export default Card