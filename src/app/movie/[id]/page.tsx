'use client'
import MediaDetail from '@/components/screens/MediaDetail/MediaDetail'
import {useParams} from 'next/navigation'
export default function Page(){
    
    const {id} = useParams()

    return( 
    <div>
        <MediaDetail type={'movie'} id={Number(id)}/>
    </div>
    )
}