import styles from "./Header.module.css";

export default function Header({ subtitle }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Tomas Aparicio</h1>
            <div className={styles.subtitle}>{subtitle}</div>
        </header>
    );
}