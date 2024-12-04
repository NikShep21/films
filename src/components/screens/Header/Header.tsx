import Link from "next/link";
import styles from "./Header.module.scss";
import CustomLink from "@/components/ui/customLink/CustomLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          
          <h1 className={styles.name}>Films</h1>
        </div>
        <nav>
          <ul className={styles.navContainer}>
            
            <li>
              <Link href="/categorie">CATEGORIE</Link>
            </li>
            <li>
              <Link href="/recommended">RECOMMENDED</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/Search">SEARCH</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={styles.navAuthContainer}>
            <li><Link href='/logIn'>LOG IN</Link></li>
            <li><CustomLink href='/signUp'>SIGN UP</CustomLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
