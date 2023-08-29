import React from 'react';
import './App.css';
import SideBar from './sidebar';
import Top from './top';
import About_me from './about_me';
import Projects from './projects';

function App() {
  return (
    <div id="App">
      <div className="container">
          Trenton's Site
        </div>
      <SideBar />
      <div id="page-wrap">
        <Top />
        <About_me />
        <Projects />
      </div>
    </div>
  );
}

export default App;