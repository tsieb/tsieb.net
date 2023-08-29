// projects.jsx

import React from 'react';

export default props => {
  return (
    <>
      <section id="projects" style={{"marginTop": "5em"}}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 id="myProjects">My Projects</h1>
              <p id="PIntro">I have worked on many projects and competitions over
                the years for groups such as the TRUSU
                Engineering Club and WGSS Robotics Club as well as personal
                automation and design projects. Below are some
                of my favorites.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{"marginTop": "2em", "marginBottom": "2em"}}>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-4 col-12">
              <ul className="list-unstyled">
                <li className="media">
                  <img className="mr-3" src="images/icon_clyde_blurple_RGB.png"
                    alt="Discord Logo"></img>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1"><a
                        href="https://github.com/tsieb/MountainHacks-2021-LGC"
                        target="_blank"
                        role="button" id="MHTitle">Mountain Hacks hackathon entry</a></h5>
                    <div id="MHBody">Together with a team of undergraduate
                      software developers, I created a bot that uses
                      the Discord and Google Books API. The bot provides a number
                      of tools for creating and storing a
                      library that is personalized for each user.</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <ul className="list-unstyled">
                <li className="media">
                  <img className="mr-3" src="images/trusu.png" alt="TRUSU logo"></img>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1"><a
                        href="https://github.com/tsieb/TRUSU-Engineering-Club-Website"
                        target="_blank"
                        role="button" id="TRUSUWebTitle"> TRUSU Engineering Club
                        website</a></h5>
                    <div id="TRUSUWebBody">The website for the club is still very
                      much under development but eventually will be a home to project 
                      details and member bios among other features. </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <ul className="list-unstyled">
                <li className="media">
                  <img className="mr-3" src="images/tru.png" alt="TRU Logo"></img>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1" id="TRUHackTitle">TRU Hackathon</h5>
                    <div id="TRUHackBody">This hackathon is hosted anually by a
                      TRU science professor. Students involved use
                      R or another language of choice to solve a number of
                      challenges. The results are graded on simplicity
                      and quality and scored. I placed in the top scoring team in
                      the 2020 competition.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{"marginTop": "2em", "marginBottom": "5em"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 text-center">
              <img className="img-fluid" src="images/sub.png" alt="Club members
                holding robot"></img>
              <h4 id="RCSTitle">Remote Controlled Submersible</h4>
              <h6 id="RCSBody">The sub was created with the TRUSU Engineering Club
                as a way to explore the floor of
                fresh-water lakes. The design consists of PVC pipes sealed to
                provide bouyancy, four motors for thrust, a
                sealed electronics compartement and a tether for power and
                communication.</h6>
            </div>
            <div className="col-md-6 col-12 text-center mt-md-0 mt-2">
              <img className="img-fluid" src="images/robot.jpg" alt="Robot on
                competition table"></img>
              <h4 id="RCTitle">Robotics Competitions</h4>
              <h6 id="RCBody">Over multiple years with the WGSS Robotics Club,
                robots were built to compete in a number of
                different competitions. The club placed top in the regional 'B'
                Division in 2017 for the VEX Robotics
                competition. </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};