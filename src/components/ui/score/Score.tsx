import { useEffect, useState } from 'react'
import styles from './Score.module.scss'

const Score = ({score, className}:{ score:number, className?:string}) => {
    const [color, setColor] = useState<string>('')
    useEffect(()=>{
        if(score >= 9){
            setColor('#008000')
        }
        else if(score>=7){
            setColor("#ADFF2F")
        }
        else if(score >=4){
            setColor("#FFA500")
        }
        else{
            setColor("#FF0000")
        }
    },[])
  return (
    <div className={`${styles.score} ${className}`} style={{backgroundColor:color}}>{score.toFixed(1)}</div>
  )
}

export default Score