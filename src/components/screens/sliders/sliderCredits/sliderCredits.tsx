'use client'
import { getCredits} from '@/api/response'
import Slider from '@/components/slider/Slider'
import Switcher from '@/components/ui/Switcher/Switcher'
import { useResize } from '@/hooks/useResize'
import useResponse from '@/hooks/useResponse'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../baseStyles.module.scss'
import { CreditsCast, CreditsCrew } from '@/api/types'
import CardCredit from '@/components/CardsSlider/CardCredit/CardCredit'

interface Props {
  id: number
  type: 'movie' | 'tv'
}

const SliderCredits = ({id, type}:Props) => {
    const [typeCredits, setTypeCredits] = useState<'Crew'|'Cast'>('Crew')
    
    const [data, isLoad, errors] = useResponse(()=> getCredits(id,type,typeCredits === 'Crew' ? 'crew' : 'cast'),[typeCredits])
   
    const [parsedData, setParsedData] = useState<CreditsCast[]|CreditsCrew[]|null>(null)
    const containerRef = useRef<HTMLDivElement>(null);
    const { isScreenVsm } = useResize(containerRef);
    useEffect(() => {
        if (data) {
          
            setParsedData(data.slice(0, 20))
        }
    }, [isLoad])
    function setType(switchName:'Crew'|'Cast'){
        setTypeCredits(switchName)
    }
 
  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Credits</div>
        <Switcher
          typeSwitcher={isScreenVsm ? "dropDown" : "default"}
          funcChangeState={setType}
          params={['Crew','Cast']}
        />
      </div>
      <Slider<CreditsCast|CreditsCrew>
        
        data={parsedData}
        isLoad={isLoad}
        maxWidthCard={169}
        renderItem={(item, index, widthCard) => (
          <CardCredit widthCard={widthCard} key={index} data={item}/>
          )}
      />
    </div>
  )
}

export default SliderCredits