import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { useEffect } from "react";
interface Props extends React.HTMLProps<HTMLDivElement> {

}
const Modal = ({ children,}: Props) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    return null;
  }
  
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Восстановление скролла при размонтировании
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  return ReactDOM.createPortal(
    <div className={styles.containerModal}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
