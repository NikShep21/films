import { useEffect, useRef, useState } from 'react'
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
    const [dropListWidth, setDropListWidth] = useState<number>(0)
    function clickElem(index:number){
            setActiveIndex(index)
            funcChangeState(params[index])
            setIsDrop(false)
    }
    useEffect(() => {
        if (dropListRef.current) {
            setDropListWidth((dropListRef.current.getBoundingClientRect().width))
        }
    }, [])
    
    const toggleDropdown = () => setIsDrop(!isDrop);
  return (
    <div  style={{width:dropListWidth }}  className={styles.switcher}>
        <button onClick={toggleDropdown} className={styles.activeElem}>
            {params[activeIndex]}
        <div style={{transform: isDrop ? 'rotate(45deg)':'rotate(-45deg)', top: isDrop ? -2.5:-0.5}} className={styles.arrow}></div>
        </button>   
        <div className={styles.dropListContainer} style={{visibility:isDrop ? 'visible':'hidden'}}>
            <ul className={styles.dropList} ref={dropListRef} >
                
                { 
                    params.map((elem,id)=>{
                        if(id !== activeIndex){
                            return(
                                <li key={id} onClick={()=>clickElem(id)} className={styles.elemList}>
                                    
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