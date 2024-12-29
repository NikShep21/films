import { DiVim } from 'react-icons/di'
import styles from './Switcher.module.scss'
import { useState } from 'react'

interface TypeProps{
    params:string[],
    funcChangeState:Function
    className?:string

}
const Switcher = ({params,funcChangeState, className = ''}:TypeProps) =>{
    const [activeIndex,setActiveIndex] = useState<number>(0)
    function clickElem(index:number){
                setActiveIndex(index)
                funcChangeState(params[index])
    }
    return(
        <div className={`${styles.switcherContainer} ${className}`}
           
        >
            <div className={styles.activeElem}
             style={{ width: `${100 / params.length}%`, left: `${(100 / params.length) * activeIndex}%` }}
            ></div>
            <div className={styles.contentContainer}
            style={{gridTemplateColumns:`repeat(${params.length},1fr) `}}
            >

            {
                params.map((elem,index)=>(
                    <button key={index} onClick={()=>clickElem(index)} className={styles.elemSwitcher}>{elem}</button>
                ))
            }
            </div>
        </div>
    )
}
export default Switcher