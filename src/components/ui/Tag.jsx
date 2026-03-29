import styles from "./Tag.module.css";

export default function Tag({ children, odd }) {
    return (
        <span className={`${styles.tag} ${odd ? styles.odd : styles.even}`}>
            {children}
        </span>
    );
}