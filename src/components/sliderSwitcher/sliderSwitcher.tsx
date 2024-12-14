'use client'
import useResponse from '@/hooks/useResponse';
import Slider from '../slider/Slider'
import styles from './SliderSwitcher.module.scss'
import { MassiveMovie } from '@/api/types';
import { getMovieMassive } from '@/api/response';
import { useState } from 'react';
import Switcher from '../ui/Switcher/Switcher';

interface TypeProps{
    NameCategory: string 
}

const SliderSwitcher = ({NameCategory}:TypeProps) =>{
    const [stateSwitch,setStateSwtich] = useState<'Movies' | 'TV'>('Movies')
    function changeStateSwitch(){
        setStateSwtich('Movies')
    }
    return( 
        
        <div className={styles.sliderContainer}>
            <div className={styles.nameCategory}>
                {NameCategory}
            </div>
            <Switcher className={styles.switcher} funcChangeState={changeStateSwitch} params={['Movies','TV',]}/>
            <Slider/>
        </div>
       
        
    )
}
export default SliderSwitcher