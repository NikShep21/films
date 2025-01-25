import { useState } from 'react'
import styles from './DropDownSwitch.module.scss'
interface TypeProps{
    params:string[],
    funcChangeState:Function,
    
    
}
const DropDownSwitch = ({params,funcChangeState}:TypeProps) => {
    const [activeIndex,setActiveIndex] = useState<number>(0)
    const [isDrop, setIsDrop] = useState<boolean>(false)
    function click(){
        isDrop === false ? 
        setIsDrop(true)
        :
        setIsDrop(false)
    }
  return (
    <div className={styles.switcher}>
        <button onClick={click} className={styles.activeElem}>
            {params[activeIndex]}
        <div style={{transform: isDrop ? 'rotate(45deg)':'rotate(-45deg)'}} className={styles.arrow}></div>
        </button>   
        <div className={styles.dropList}>
            <ul style={{display:isDrop ? 'block':'none'}}>
                
                { 
                    params.map((elem,id)=>{
                        if(id !== activeIndex){
                            return(
                                <li className={styles.elemList}>
                                    <button>
                                    {elem}
                                    </button>
                                </li>
                            )
                        }
                    })
                } 
            </ul>
        </div>
    </div>
  )
}

export default DropDownSwitch