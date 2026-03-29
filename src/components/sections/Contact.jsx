import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "../ui/Icons";
import styles from "./Contact.module.css";

export default function Contact({ t }) {
    return (
        <Section>
            <SectionTitle>{t.contact}</SectionTitle>
            <div className={styles.contact}>
                <span className={styles.item}>
                    <EmailIcon className={styles.icon} />
                    <span className={styles.label}>Email: </span>
                    <a href="mailto:tomasmgoyenecheap@gmail.com">
                        tomasmgoyenecheap@gmail.com
                    </a>
                </span>

                <span className={styles.item}>
                    <LinkedInIcon className={styles.icon} />
                    <span className={styles.label}>LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/tomas-aparicio/" target="_blank" rel="noreferrer">
                        tomas-aparicio
                    </a>
                </span>

                <span className={styles.item}>
                    <GitHubIcon className={styles.icon} />
                    <span className={styles.label}>GitHub: </span>
                    <a href="https://github.com/Tomilomi" target="_blank" rel="noreferrer">
                        Tomilomi
                    </a>
                </span>
            </div>
        </Section>
    );
}