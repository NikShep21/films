import { getUrlImage, isMovie } from "@/utils/utils";
import styles from "./MainDescriptionTitle.module.scss";
import { Movie, Tv } from "@/api/types";
import Genre from "@/components/ui/genre/Genre";
import LoadCard from "@/components/ui/loadCard/LoadCard";
import Image from "next/image"
import MyImage from "@/components/ui/myImage/MyImage";
import uniqData from "./uniqData";

interface MainDescriptionTitleProps {
  type: 'movie' | 'tv';
  data: Movie | Tv | null;
}

const MainDescriptionTitle = ({ data, type }: MainDescriptionTitleProps) => {
  
  const dataDesc = uniqData(data,type)
  

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.titleImageContainer}>
    
      
        <MyImage
          width="342px"
          aspect="487/731"
          
          src={getUrlImage(data?.poster_path, "w342")}
          className={styles.image}
          
        />
      
    
     

        
      </div>
      <div className={styles.titleInfoContainer}>
        {
          data ? 
        <h1>
          
          {isMovie(data) ? data.title : data.name} ({(isMovie(data) ? data.release_date : data.first_air_date).slice(0, 4)})
        </h1>
        :
        <h1>
          <LoadCard height="1em" width="70%"/> 
        </h1>
        
        
        }

        <div className={styles.genres}>
          {
            data ? 
            data.genres.map((elem, id) => (
              <Genre
                key={id}
                idGenre={elem.id}
                typeGenre={isMovie(data) ? "movie" : "tv"}
              />
            ))
            :
            <>
            <LoadCard height="25px" width="80px"/>
            <LoadCard height="25px" width="80px"/>
            </>
            
            
          }
          
        </div>
        <div className={styles.overviewContainer}>
          <h2>Overview</h2>
          {
            data?
            <p className={styles.overview}>
              {data.overview}
          </p>
          :
          <div className={styles.loaderContainer}>
            <LoadCard height="1em" width="100%"/>
            <LoadCard height="1em" width="100%"/>
            <LoadCard height="1em" width="60%"/>
          </div>
          }
          
        </div>
        <div className={styles.statusContainer}>
          <div className={styles.line}>
            {
              dataDesc.map((group,id)=>(
                <ul key={id}>
                  {
                    group.map((item,subId)=>(
                      <li className={styles.descElem} key={subId}>
                        <p>
                        {item.label} 
                        </p>
      
                        <div>{item.content ? item.content:<LoadCard height="1em" width="100px"/>}</div>
                      </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDescriptionTitle;
