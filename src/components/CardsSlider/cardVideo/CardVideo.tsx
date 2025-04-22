"use client";
import { VideoType } from "@/api/types";
import styles from "./CardVideo.module.scss";
import { useEffect, useState } from "react";
import LoadCard from "@/components/ui/loadCard/LoadCard";
import ButtonPlay from "@/components/ui/ButtonPlay/ButtonPlay";
import CustomIframe from "@/components/screens/CustomIframe/CustomIframe";
import Modal from "@/components/ui/modal/Modal";
import MyImage from "@/components/ui/myImage/MyImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder/ImagePlaceholder";
interface Props {
  data: VideoType | null;
  widthCard: number;
  
}

const CardVideo = ({ data, widthCard}: Props) => {
  if (!data) {
    return (
      <>
        <LoadCard borderRadius="8px" isText={true} aspect="16/9" width={`${widthCard}px`} />
      </>
    );
  }
  const [isIframe, setIsIframe] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
 
  
  function handleIframe() {
    setIsIframe(!isIframe);
  }
  


  return (
    <div
      onClick={handleIframe}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: widthCard }}
      className={styles.card}
    >
      <div className={styles.video}>
        {
          data.key ? 
            <MyImage
            borderRadius="8px"
            className={styles.image}
            src={`https://img.youtube.com/vi/${data.key}/hqdefault.jpg`}
            width={`${widthCard}px`}
            aspect="16/9"
        />
          :
          <ImagePlaceholder width={widthCard} aspectRatio="16/9">No video</ImagePlaceholder>

        }
        
        <ButtonPlay className={styles.buttonPlay} forceHover={isHovered} />
      </div>
      <div className={styles.name}>{data.name}</div>
      {isIframe ? (
        <Modal className={styles.modal}>
          <CustomIframe funcCloseModal={handleIframe} keyUrl={data.key}  name={data.name}/>
        </Modal>
      ) : null}
    </div>
  );
};

export default CardVideo;
