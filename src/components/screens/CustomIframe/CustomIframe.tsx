import styles from './CustomIframe.module.scss'
interface Props {
    keyUrl: string
}


const CustomIframe = ({keyUrl}:Props) =>{

    const pathVideo = `https://www.youtube.com/embed/${keyUrl}`

    return(
        
            <iframe  className={styles.iframe} allowFullScreen src={pathVideo}></iframe>
        
    )
}
export default CustomIframe