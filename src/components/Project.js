import "../App.css";
import Card from "./Card";

const Project = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <h2 className="project-heading">My projects</h2>
      </div>
      <div className="projects-section">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Project;
