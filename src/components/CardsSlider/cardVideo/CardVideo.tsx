'use client'
import { VideoType } from "@/api/types";
import styles from "./CardVideo.module.scss";
import { useEffect, useState } from "react";
import LoadCard from "@/components/ui/loadCard/LoadCard";
import ButtonPlay from "@/components/ui/ButtonPlay/ButtonPlay";
import CustomIframe from "@/components/screens/CustomIframe/CustomIframe";
interface Props {
    data: VideoType[] | null;
    widthCard: number;
    type: string;
}

const CardVideo = ({
  data,
  widthCard,
  type,
}:Props) => {
  
  if (!data) {
    return (
      <>
        <LoadCard isText={true} aspect="16/9" width={`${widthCard}px`} />
      </>
    );
  }
  const [isIframe, setIsIframe] = useState<boolean>(false);  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [elem, setElem] = useState<VideoType | null>(
    data.find((item: VideoType) => item.type === type) || null
  );
  function handleIframe() {
    setIsIframe(!isIframe);
  }
  if (!elem) {
    
      console.error("No video found") 
        return null;
  }

  return (
    <div onClick={handleIframe} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={{width:widthCard}} className={styles.card}>
        <div className={styles.video}>
            <img className={styles.image} src={`https://img.youtube.com/vi/${elem.key}/hqdefault.jpg`} alt="" />
            <ButtonPlay className={styles.buttonPlay} forceHover = {isHovered}/>
            {
              isIframe ? (
                <CustomIframe keyUrl={elem.key}/>
              )
              :
              null
            }
        </div>
    </div>
  );
};

export default CardVideo;
