import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log("TCL: ProjectList projects", projects);
  return (
    <div className="project-list section">
      {projects ? (
        <Link to={`/project/${projects.id}`}>
          <ProjectSummary project={projects} />
        </Link>
      ) : null}
    </div>
  );
};
export default ProjectList;
