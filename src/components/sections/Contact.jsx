import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "../ui/Icons";
import styles from "./Contact.module.css";

export default function Contact({ t }) {
    // Correo en base64: "dG9tYXNtZ295ZW5lY2hlYXBAZ21haWwuY29t"
    const encodedEmail = "dG9tYXNtZ295ZW5lY2hlYXBAZ21haWwuY29t";

    const handleEmailClick = (e) => {
        e.preventDefault();
        const email = atob(encodedEmail);
        window.location.href = `mailto:${email}`;
    };

    return (
        <Section>
            <SectionTitle>{t.contact}</SectionTitle>
            <div className={styles.contact}>
                <span className={styles.item}>
                    <EmailIcon className={styles.icon} />
                    <span className={styles.label}>Email: </span>
                    <a href="#" onClick={handleEmailClick}>
                        {/* Se visualiza con entidades HTML o ensamblado para despistar scrapers sencillos */}
                        tomasmgoyenecheap&#64;gmail&#46;com
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