import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>Films</h1>
                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className={styles.numberContainer}>Cull us: <Link className={styles.number} href='tel:123-456-7890'>123-456-789-0</Link></div>
            </div>
            <nav className={styles.navContainer}>
                <ul className={styles.nav}>
                    <li>
                        <h2 className={styles.head}>Resources</h2>
                        <ul className={styles.navHeadContainer}>
                            <li>
                                <Link href="#">About</Link>
                            </li>
                            <li>
                                <Link href="#">Blog</Link>
                            </li>
                            <li>
                                <Link href="#">Help Center</Link>
                            </li>
                            <li>
                                <Link href="#">Forums</Link>
                            </li>
                            <li>
                                <Link href="#">Contact Us</Link>
                            </li>
                        </ul>
                                </li>
                    <li>
                        <h2 className={styles.head}>Account</h2>
                        <ul className={styles.navHeadContainer}>
                            <li>
                                <Link href="#">My Account</Link>
                            </li>
                            <li>
                                <Link href="#">WatchList</Link>
                            </li>
                            <li>
                                <Link href="#">Collections</Link>
                            </li>
                            <li>
                                <Link href="#">User Guide</Link>
                            </li>
                        </ul>
                                </li>
                    <li>
                        <h2 className={styles.head}>Navigation</h2>
                        <ul className={styles.navHeadContainer}>
                            <li>
                                <Link href="#">Category</Link>
                            </li>
                            <li>
                                <Link href="#">Recommended</Link>
                            </li>
                            <li>
                                <Link href="#">News</Link>
                            </li>
                            <li>
                                <Link href="#">Search</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className={styles.mailContainer}>
                <h2 className={styles.head}>Newsletter</h2>
                <div className={styles.descriptionMail}>Subscribe to our newsletter system now
                to get latest news from us.</div>
                <form className={styles.formContainer}>
                    <input className={styles.input} type="email" />
                    <button className={styles.submit}><MdOutlineEmail size={18}/></button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer