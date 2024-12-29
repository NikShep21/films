'use client'


import Slider from '../slider/Slider'
import styles from './SliderSwitcher.module.scss'

import { useEffect, useState } from 'react';
import Switcher from '../ui/Switcher/Switcher';
import useResponse from '@/hooks/useResponse';

import { getMassiveTitles } from '@/api/response';
import { MassiveMovie, MassiveTv } from '@/api/types';

interface TypeProps{
    NameCategory: string 
}

const parseTypeTitles:{Movies:'movie', TV:'tv'} = {
    Movies:'movie',
    TV:'tv'
}

const SliderSwitcher = ({NameCategory}:TypeProps) =>{
    
    const [selectedTypeTitles,setSelectedTypeTitles] = useState<'Movies' | 'TV'>('Movies')
    const [data,isLoad,errors] = useResponse<MassiveMovie[] | MassiveTv[]>(getMassiveTitles(NameCategory,parseTypeTitles[selectedTypeTitles]))
   console.log(parseTypeTitles[selectedTypeTitles])
    
    function changeStateSwitch(switchName:'Movies'| 'TV'){
        setSelectedTypeTitles(switchName)
    }
    return( 
        
        <div className={styles.sliderContainer}>
            <div className={styles.nameCategory}>
                    {NameCategory}
                </div>
                <Switcher className={styles.switcher} funcChangeState={changeStateSwitch} params={['Movies','TV']}/>
            <Slider data={data} isLoad = {isLoad}/>
        </div>
       
        
    )
}
export default SliderSwitcher