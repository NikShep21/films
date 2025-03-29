import { getCredits} from '@/api/response'
import Slider from '@/components/slider/Slider'
import Switcher from '@/components/ui/Switcher/Switcher'
import { useResize } from '@/hooks/useResize'
import useResponse from '@/hooks/useResponse'
import React, { useRef, useState } from 'react'
import styles from '../baseStyles.module.scss'

interface Props {
  id?: number
  type?: 'movie'|'tv'
}

const SliderPopular = ({id, type}:Props) => {
    const [typeTitle, setTypeTitle] = useState<'Crew'|'Cast'>('Crew')
    
    const [data, isLoad, errors] = useResponse(()=> getCredits(),[typeTitle])
    const containerRef = useRef<HTMLDivElement>(null);
    const { isScreenVsm } = useResize(containerRef);
    function setType(switchName:'Crew'|'Cast'){
        setTypeTitle(switchName)
    }
    
  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Popular</div>
        <Switcher
          typeSwitcher={isScreenVsm ? "dropDown" : "default"}
          funcChangeState={setType}
          params={['Crew','Cast']}
        />
      </div>
      <Slider<|MassiveTv>
        
        data={data}
        isLoad={isLoad}
        maxWidthCard={169}
        renderItem={(item, index, widthCard) => (
            <Card key={index} data={item} widthCard={widthCard} />
          )}
      />
    </div>
  )
}

export default SliderPopular