import projectsData from './projects.json';

export const technical_skills = [
    {
        title: "Languages",
        items: ["Python", "VHDL", "C++", "C", "Oracle SQL", "Javascript", "Java"],
        images: ["images/python.png", "images/vhdl.png", "images/cpp.png", "images/c.png", "images/oracle_sql.png", "images/js.png", "images/java.png"]
    },
    {
        title: "Platforms",
        items: ["MATLAB", "React.js", "Tensorflow"],
        images: ["images/matlab.png", "images/react.png", "images/tensorflow.png"]
    }
];

export const projects = projectsData.map(project => ({
  ...project,
  start: new Date(project.start),
  end: new Date(project.end),
}));
