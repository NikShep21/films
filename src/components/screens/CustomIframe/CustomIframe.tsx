import styles from './CustomIframe.module.scss'
interface Props {
    keyUrl: string;
    name: string;
    funcCloseModal: () => void;
}


const CustomIframe = ({keyUrl, name, funcCloseModal}:Props) =>{

    const pathVideo = `https://www.youtube.com/embed/${keyUrl}`

    return(
        <div className={styles.iframeContainer}>
            <div className={styles.iframeContent}>
                <div className={styles.upper}>
                    <div className={styles.name}>{name}</div>
                    <button onClick={funcCloseModal} className={styles.closeModal}>
                        <div className={styles.lineOne}></div>
                        <div className={styles.lineTwo}></div>
                    </button>
                </div>
                <iframe  className={styles.iframe} allowFullScreen src={pathVideo}></iframe>
            </div>

        </div>
        
    )
}
export default CustomIframe