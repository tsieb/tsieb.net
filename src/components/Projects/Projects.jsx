import React, { useMemo } from 'react';
import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';

// Extracted component for "No Projects" message
const NoProjectsMessage = () => <div>No Dedicated Projects (Yet!)</div>;

const Projects = ({ projects, selected, selectedProject }) => {
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
    <div>
      {isEmpty && selected !== null && <NoProjectsMessage />}
      {projectsToDisplay.map((project) => (
        <ProjectItem key={project.id || project.title} project={project} />
      ))}
    </div>
  );
};

export default Projects;
