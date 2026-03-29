import { projects } from "../../data/projects";
import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import styles from "./Projects.module.css";

function ProjectCard({ project, t }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderDot} />
                <div className={styles.cardHeaderDot} />
                <div className={styles.cardHeaderDot} />
                <p className={styles.projectTitle}>{project.name}</p>
            </div>

            <div className={styles.cardBody}>
                {project.preview ? (
                    <img
                        src={project.preview}
                        alt={project.name}
                        className={styles.preview}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        NO PREVIEW AVAILABLE
                    </div>
                )}

                <div className={styles.cardInfo}>
                    <p className={styles.summary}>
                        {t[project.keys.summary]}
                    </p>

                    <div className={styles.links}>
                        {project.links.map((link) => (
                            <a
                                key={link.labelKey}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                {t[link.labelKey]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.cardFooter}>
                {project.tags.map((tag, i) => (
                    <Tag key={tag} odd={i % 2 === 0}>
                        {tag}
                    </Tag>
                ))}
            </div>
        </div>
    );
}

export default function Projects({ t }) {
    return (
        <Section>
            <SectionTitle>{t.projects}</SectionTitle>

            {projects.map((project, i) => (
                <div key={project.id}>
                    <ProjectCard project={project} t={t} />

                    {i < projects.length - 1 && (
                        <hr className={styles.separator} />
                    )}
                </div>
            ))}
        </Section>
    );
}