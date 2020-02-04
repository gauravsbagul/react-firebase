import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log("TCL: ProjectList projects", projects);
  return (
    <div className="project-list section">
      {projects.map((project, index) => {
        return (
          <Link to={`/project/${project.id}`} key={index}>
            <ProjectSummary project={project} />
          </Link>
        );
      })}
    </div>
  );
};
export default ProjectList;
