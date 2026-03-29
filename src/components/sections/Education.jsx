import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Education.module.css";

export default function Education({ t }) {
    return (
        <Section>
            <SectionTitle>{t.education}</SectionTitle>
            <p className={styles.text}>{t.edu1}</p>
            <p className={styles.text}>{t.edu2}</p>
        </Section>
    );
}