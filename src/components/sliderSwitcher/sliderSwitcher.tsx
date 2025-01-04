'use client'


import Slider from '../slider/Slider'
import styles from './SliderSwitcher.module.scss'

import {useState } from 'react';
import Switcher from '../ui/Switcher/Switcher';
import useResponse from '@/hooks/useResponse';

import { getMassiveTitles } from '@/api/response';
import { MassiveMovie, MassiveTv } from '@/api/types';
import Card from '../card/Card';

interface TypeProps{
    NameCategory: string 
}

const parseTypeTitles:{Movies:'movie', TV:'tv'} = {
    Movies:'movie',
    TV:'tv'
}

const SliderSwitcher = ({NameCategory}:TypeProps) =>{
    
    const [selectedTypeTitles,setSelectedTypeTitles] = useState<'Movies' | 'TV'>('Movies')
    const [data,isLoad,errors] = useResponse(getMassiveTitles(NameCategory,parseTypeTitles[selectedTypeTitles]))
   
    
    function changeStateSwitch(switchName:'Movies'| 'TV'){
        setSelectedTypeTitles(switchName)
    }
    return( 
        
        <div className={styles.sliderContainer}>
            <div className={styles.nameCategory}>
                    {NameCategory}
                </div>
                <Switcher className={styles.switcher} funcChangeState={changeStateSwitch} params={['Movies','TV']}/>
            <Slider<MassiveMovie | MassiveTv>
                data={data}
                isLoad={isLoad}
                renderItem={(item, index) => <Card key={index} data={item} />}
            />
        </div>
       
        
    )
}
export default SliderSwitcher