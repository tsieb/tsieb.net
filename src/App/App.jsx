import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Background from '../components/CustomBackground';
import Text from '../components/Text/Text';
import Header from '../components/Header/Header';
import ListGroup from '../components/ListGroup/ListGroup';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/Timeline/Timeline';
import Contact from '../components/Contact/Contact';
import ToggleButton from '../components/ToggleButton/ToggleButton';
import { technical_skills, projects } from '../constants';

const textArray = [
  'Trenton Sieb',
  'Detail-Oriented Engineer',
  'Inquisitive Researcher',
  'Strategic Problem-Solver',
  'Proactive Programmer',
  'Collaborative Learner'
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isListGroupOpen, setIsListGroupOpen] = useState(true);
  const [isTimelineOpen, setIsTimelineOpen] = useState(true);
  const [isTimelineVisible, setIsTimelineVisible] = useState(true);

  const delay = 3000;

  useEffect(() => {
  }, []);

  const toggleState = (setState) => () => setState(prevState => !prevState);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedProject(null);
  };

  const handleProjectSelection = (project) => {
    setSelectedProject(project);
    setSelectedCategory(null);
  };

  const RenderToggleComponent = ({ isOpen, toggleFunc, label, component }) => (
    <>
      <ToggleButton isOpen={isOpen} toggleFunc={toggleFunc} label={label} className={styles.toggleButton} />
      {isOpen && component}
    </>
  );

  return (
    <div className={styles.app}>
      <Header textArray={textArray} delay={delay} />
      <div className={styles.mainContent}>
        <Background />
        <div className={`${styles.toggleContainer} ${styles.marginBottom}`}>
        <RenderToggleComponent 
          isOpen={isListGroupOpen}
          toggleFunc={toggleState(setIsListGroupOpen)}
          label="Select Category"
          component={
            <ListGroup lists={technical_skills} selected={selectedCategory} setSelected={handleCategorySelection} className="list-group" />
          }
        />
      </div>
      <div className={`${styles.toggleContainer} ${styles.marginBottom}`}>
        <RenderToggleComponent 
          isOpen={isTimelineOpen}
          toggleFunc={toggleState(setIsTimelineOpen)}
          label="Select from Timeline"
          component={
            <Timeline projects={projects} selectedCategory={selectedCategory} selected={selectedProject} setSelected={handleProjectSelection} isTimelineVisible={isTimelineVisible} />
          }
        />
      </div>
        <Projects projects={projects} selected={selectedCategory} selectedProject={selectedProject} setSelectedCategory={setSelectedCategory} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
