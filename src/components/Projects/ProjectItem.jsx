import React from 'react';
import styles from './Projects.module.css';

const ProjectItem = ({ project, setSelectedCategory }) => {
  const { title, topics, summary, body } = project;

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.projectBackground}>
      <div className={styles.projectContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.topics}>
          {topics.map((topic, index) => (
            <button 
              key={index} 
              className={styles.topicButton}
              onClick={() => handleButtonClick(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.summary}>{summary}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default ProjectItem;
