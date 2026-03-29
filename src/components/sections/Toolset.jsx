import { toolset } from "../../data/toolset";
import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import styles from "./Toolset.module.css";

function TagList({ items }) {
    return (
        <div className={styles.taglist}>
            {items.map((item, i) => (
                <Tag key={item} odd={i % 2 === 0}>{item}</Tag>
            ))}
        </div>
    );
}

export default function Toolset({ t }) {
    return (
        <Section>
            <SectionTitle>{t.toolset}</SectionTitle>

            <p className={styles.label}><strong>{t.languages}</strong></p>
            <TagList items={toolset.languages} />

            <p className={styles.label}><strong>{t.databases}</strong></p>
            <TagList items={toolset.databases} />

            <p className={styles.label}><strong>{t.stacks}</strong></p>
            <TagList items={toolset.stacks} />

            <p className={styles.label}><strong>{t.other}</strong></p>
            <TagList items={toolset.other} />
        </Section>
    );
}