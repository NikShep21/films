import { CreditsCastType, CreditsCrewType } from "@/api/types";
import styles from "./CardCredit.module.scss";
import { getUrlImage } from "@/utils/utils";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder/ImagePlaceholder";
import LoadCard from "@/components/ui/loadCard/LoadCard";
import MyImage from "@/components/ui/myImage/MyImage";
interface Props {
  data: CreditsCastType | CreditsCrewType | null;
  widthCard: number;
}
const CardCredit = ({ data, widthCard }: Props) => {
  if (!data) {
    return (
      <>
        <LoadCard
          borderRadius="8px"
          isText={true}
          aspect="487/731"
          width={`${widthCard}px`}
        />
      </>
    );
  }

  return (
    <div className={styles.container} style={{ width: `${widthCard}px` }}>
      {data.profile_path ? (
        <MyImage
          borderRadius="8px"
          width={`${widthCard}px`}
          aspect="487/731"
          className={styles.image}
          src={getUrlImage(data.profile_path, "w185")}
          alt=""
        />
      ) : (
        <ImagePlaceholder width={widthCard} aspectRatio="487/731" >No Image</ImagePlaceholder>
      )}
      <div className={styles.infoContainer}>
        <p className={styles.namePerson}>{data.name}</p>
        <p className={styles.who}>
          {"character" in data ? data.character : data.job}
        </p>
      </div>
    </div>
  );
};

export default CardCredit;
