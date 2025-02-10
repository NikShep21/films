import { useRef, useState } from 'react'
import styles from './DropDownSwitch.module.scss'
import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints'
interface TypeProps{
    params:string[],
    funcChangeState:Function,
    
    
}
const DropDownSwitch = ({params,funcChangeState}:TypeProps) => {
    const [activeIndex,setActiveIndex] = useState<number>(0)
    const [isDrop, setIsDrop] = useState<boolean>(false)
    const dropListRef = useRef<HTMLUListElement>(null)

    
    const toggleDropdown = () => setIsDrop(!isDrop);
  return (
    <div  style={{width:dropListRef.current?.style.width}}  className={styles.switcher}>
        <button onClick={toggleDropdown} className={styles.activeElem}>
            {params[activeIndex]}
        <div style={{transform: isDrop ? 'rotate(45deg)':'rotate(-45deg)'}} className={styles.arrow}></div>
        </button>   
        <div className={styles.dropList}>
            <ul ref={dropListRef} style={{display:isDrop ? 'block':'none'}}>
                
                { 
                    params.map((elem,id)=>{
                        if(id !== activeIndex){
                            return(
                                <li className={styles.elemList}>
                                    
                                    {elem}
                                    
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