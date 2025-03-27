import SliderSwitcher from '@/components/sliderSwitcher/SliderSwitcher';
import styles from './SlidersTitle.module.scss'
import CardCredit from '@/components/CardsSlider/CardCredit/CardCredit';
import { CreditsCast, CreditsCrew } from '@/api/types';
import { getCredits } from '@/api/response';
interface Props{
    type: "movie" | "tv";
    id: number;
}
const SlidersTitle = ({type, id}:Props) => {

    return (
        <div className={styles.sliderContainer}>
              <SliderSwitcher<CreditsCast|CreditsCrew,'cast'|'crew'>
                nameCategory="Credits"
                paramsSwitcher={['cast','crew']}
               funcResponse={(typeCredits)=>getCredits(id,type,typeCredits)}
              renderItem={(item,index,widthCard) => (
                <CardCredit widthCard={widthCard} key={index} data={item}/>
              )}
              />


          </div>
    )    
}
export default SlidersTitle;