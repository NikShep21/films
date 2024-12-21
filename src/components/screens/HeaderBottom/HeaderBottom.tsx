import Link from 'next/link'
import styles from './HeaderBottom.module.scss'
import{IoIosSearch} from 'react-icons/io'
import{BiCategory} from 'react-icons/bi'
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineRecommend } from "react-icons/md";

const HeaderBottom = () =>{
    return(
        <div className={styles.headerBottom}>
            <div className={styles.headerBottomContainer}>
            <nav>
          <ul className={styles.navContainer}>
            
            <li>
                
                
              <Link href="/categorie">
                <div>
                    <BiCategory size={'20px'}/>
                </div>
                
              CATEGORIE
              </Link>
            </li>
            <li>
              <Link href="/recommended">
                <div>
                    <MdOutlineRecommend size={'20px'}/>
                </div>
              RECOMMENDED
              </Link>
            </li>
            <li>
              <Link href="/news">
                <div>
                    <IoNewspaperOutline size={'20px'}/>
                </div>
              NEWS
              </Link>
            </li>
            <li>
              <Link href="/Search">
                <div>
                    <IoIosSearch size={'20px'}/>
                </div>
              SEARCH
              </Link>
            </li>
          </ul>
        </nav>
            </div>
        </div>
    )
}
export default HeaderBottom