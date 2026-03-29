import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Summary.module.css";

export default function Summary({ t }) {
    return (
        <Section>
            <SectionTitle>{t.summary}</SectionTitle>
            <div className={styles.summary}>
                <p dangerouslySetInnerHTML={{ __html: t.s1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.s2 }} />
                <p dangerouslySetInnerHTML={{ __html: t.s3 }} />
            </div>
        </Section>
    );
}