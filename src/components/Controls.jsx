import styles from "./Controls.module.css";

export default function Controls({ dark, toggleTheme, toggleLang, t }) {
    return (
        <div className={styles.controls}>
            <button
                className={`${styles.button} ${styles.themeBtn}`}
                onClick={toggleTheme}
            >
                {dark ? t.lightBtn : t.darkBtn}
            </button>

            <a
                className={`${styles.button} ${styles.pdfBtn}`}
                href="/cv_aparicio_tomas.pdf"
                download="cv_aparicio_tomas.pdf"
            >
                {t.downloadBtn}
            </a>

            <button
                className={`${styles.button} ${styles.langBtn}`}
                onClick={toggleLang}
            >
                {t.langBtn}
            </button>
        </div>
    );
}