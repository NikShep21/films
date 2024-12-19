'use client'
import useResponse from '@/hooks/useResponse';
import styles from './Poster.module.scss'
import { MassiveMovie } from '@/api/types';
import { getMovieMassive } from '@/api/response';
import SliderSwitcher from '@/components/sliderSwitcher/sliderSwitcher';


const Poster = () =>{
    const [isLoad, errors, data] = useResponse<MassiveMovie[]>(
        getMovieMassive,
        "popular"
      );
      
      
    return(
        <>
            <SliderSwitcher NameCategory='Popular'/>
        </>
    )
}
export default Poster