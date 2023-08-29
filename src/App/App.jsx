import React, { useState, useEffect } from 'react';
import './App.module.css';
import Text from '../components/Text/Text';
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
  const [isListGroupOpen, setIsListGroupOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const delay = 3000;

  useEffect(() => {
    // Any initial setup can go here
  }, []);

  const toggleState = (setState) => () => setState(prevState => !prevState);

  const RenderToggleComponent = ({ isOpen, toggleFunc, label, component }) => (
    <>
      <ToggleButton isOpen={isOpen} toggleFunc={toggleFunc} label={label} className="toggle-button" />
      {isOpen && component}
    </>
  );

  return (
    <div className="app">
      <div className="text__name">
        <Text textArray={textArray} delay={delay} show={true} />
      </div>

      <RenderToggleComponent 
        isOpen={isListGroupOpen}
        toggleFunc={toggleState(setIsListGroupOpen)}
        label="Select Category"
        component={<ListGroup lists={technical_skills} selected={selectedCategory} setSelected={setSelectedCategory} className="list-group" />}
      />

      <RenderToggleComponent 
        isOpen={isTimelineOpen}
        toggleFunc={toggleState(setIsTimelineOpen)}
        label="Select from Timeline"
        component={<Timeline projects={projects} selectedCategory={selectedCategory} selected={selectedProject} setSelected={setSelectedProject} />}
      />

      <Projects projects={projects} selected={selectedCategory} selectedProject={selectedProject} />
      <Contact />
    </div>
  );
};

export default App;
