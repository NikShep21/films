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


const SliderSwitcher = ({NameCategory}:TypeProps) =>{
    const [stateSwitch,setStateSwtich] = useState<string>('Movies')
    useEffect(()=>{
        if(stateSwitch === 'Movies'){
            const [data,isLoad,errors] = useResponse<MassiveMovie[]>(getMassiveTitles(stateSwitch,'movie'))
        }
        else{
            const [data,isLoad,errors] = useResponse<MassiveTv[]>(getMassiveTitles(stateSwitch,'tv'))
        }
    },[stateSwitch])
   
    
    function changeStateSwitch(switchName:string){
        setStateSwtich(switchName)
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