import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Languages.module.css";

export default function Languages({ t }) {
    return (
        <Section>
            <SectionTitle>{t.langSection}</SectionTitle>
            <ul className={styles.list}>
                <li>{t.lang1}</li>
                <li>{t.lang2}</li>
            </ul>
        </Section>
    );
}