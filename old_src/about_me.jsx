// about_me.jsx

import React from 'react';

export default props => {
  return (
    <section id="about" style={{'marginTop': '5em', 'marginBottom': '5em'}}>
      <div className="container">
        <h1 className="text-center" id="aboutWord">About Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <li className="media">
                <img className="mr-4" src="images/
                  books.png" alt="Books"></img>
                <div className="media-body">
                  <div className="media-body">
                    <p id="MeAcad">I am currently studying Software Engineering
                      at Thompson Rivers University. I am an
                      undergraduate in my third year. </p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-md-6 col-12">
              <li className="media">
                <img className="mr-4" src="images/case.png" alt="Work"></img>
                <div className="media-body">
                  <div className="media-body">
                    <p id="MeProf">I work as a Student Research Assistant at the
                      university. The current topics of
                      interest are Machine Learning, specifically, in the realm
                      of Natural Language Processing. </p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-md-6 col-12">
              <li className="media">
                <img className="mr-4" src="images/gear.png" alt="Tech"></img>
                <div className="media-body">
                  <div className="media-body">
                    <p id="MeInt">I enjoy a wide array of technology fields.
                      Machine learning has long been an interest of
                      mine along with software development and home automation.
                    </p>
                  </div>
                </div>
              </li>
            </div>
            <div className="col-md-6 col-12">
              <li className="media">
                <img className="mr-4" src="images/mount.png" alt="mountain"></img>
                <div className="media-body">
                  <div className="media-body">
                    <p id="MeHob">I enjoy doing outdoor activities such as
                      hiking and Ultimate Frisbee. I also play games
                      like DotA 2 and Factorio. </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};