import { projects } from "../../data/projects";
import Section from "../Section";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import styles from "./Projects.module.css";

function ProjectLinks({ links, t }) {
    return (
        <div className={styles.links}>
            {links.map(link => (
                <a
                    key={link.labelKey}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    {t[link.labelKey]}
                </a>
            ))}
        </div>
    );
}

function ProjectCard({ project, t }) {
    return (
        <div className={styles.card}>
            <p className={styles.projectTitle}>{project.name}</p>
            <p className={styles.summary}>{t[project.keys.summary]}</p>
            {project.preview
                ? <img src={project.preview} alt={project.name} className={styles.preview} />
                : <div className={styles.placeholder}>NO PREVIEW AVAILABLE</div>
            }
            <ProjectLinks links={project.links} t={t} />
            <div className={styles.taglist}>
                {project.tags.map((tag, i) => (
                    <Tag key={tag} odd={i % 2 === 0}>{tag}</Tag>
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
                    {i < projects.length - 1 && <hr className={styles.separator} />}
                </div>
            ))}
        </Section>
    );
}