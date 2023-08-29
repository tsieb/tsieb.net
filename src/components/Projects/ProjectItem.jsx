import React from 'react';
import styles from './Projects.module.css';

const ProjectItem = ({ project }) => {
  const { title, topics, summary, body } = project;

  return (
    <div>
      <div className={styles.projectContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.topics}>
          {topics.map((topic, index) => (
            <span key={index}>
              {topic}
              {index < topics.length - 1 && ' | '}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.summary}>{summary}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default ProjectItem;
