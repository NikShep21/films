'use client'
import { useEffect, useState } from 'react'
import styles from './Slider.module.scss'
import Card from '../card/Card'

interface PropsType<T> {
    data:T[] | null,
    isLoad:boolean,
    renderItem: (item: T | null, index: number) => JSX.Element  
    
}
const Slider = <T,>({data,isLoad,renderItem}:PropsType<T>) => {
    const [sliderElems, setSliderElems] = useState<(T | null)[]>(Array(10).fill(null))
    useEffect(()=>{
        if(data){
            setSliderElems(data)
        }
    },[isLoad])
    return( 
        
            <div className={styles.slider}>
                <div className={styles.sliderLine}>
                {sliderElems.map((elem, id) => renderItem(elem, id))}
                </div>
            </div>
        
    )
}
export default Slider