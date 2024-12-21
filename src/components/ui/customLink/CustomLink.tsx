import Link from "next/link";
import styles from "./CustomLink.module.scss";
import { AnchorHTMLAttributes } from "react";
interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;

}

const CustomLink = ({ className,children, href, ...props }:CustomLinkProps) => {
  return (
    <Link href={href} className={`${styles.link} ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
