'use client'
import { useSelector } from 'react-redux'
import styles from './Genre.module.scss'
import { RootState } from '@/store'
import { useEffect, useState } from 'react'
import { genresColors } from './genresColors'
interface propsTipe{
    idGenre:number
}
const Genre = ({idGenre}:propsTipe) => {
    const data = useSelector((store:RootState)=>store.genres.data)
    
    const [nameGenre, setNameGenre] = useState<string>('')
    useEffect(()=>{
      if(data){
        const genre = data.find((item)=>item.id===idGenre)
        genre ?  setNameGenre(genre?.name): setNameGenre('#000000')
        
      }
    },[])
    
    
    
  return (
    <div className={styles.genre} style={{backgroundColor:genresColors[nameGenre]}}>{nameGenre}</div>
  )
}

export default Genre