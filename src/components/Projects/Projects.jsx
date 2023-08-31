import React, { useMemo } from 'react';
import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';

const NoProjectsMessage = () => <div>No Dedicated Projects (Yet!)</div>;

const Projects = ({ projects, selected, selectedProject, setSelectedCategory }) => {
  const projectsToDisplay = useMemo(() => {
    if (selectedProject !== null) {
      return projects.filter((_, i) => i === selectedProject);
    }
    if (selected) {
      return projects.filter(project => project.topics.includes(selected));
    }
    return projects;
  }, [projects, selected, selectedProject]);

  const isEmpty = projectsToDisplay.length === 0;

  return (
    <div className={styles.projectList}>
      {isEmpty && selected !== null && <NoProjectsMessage />}
      {projectsToDisplay.map((project) => (
        <div className={styles.projectBorder}>
          <ProjectItem 
            key={project.id || project.title} 
            project={project} 
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
