import React from "react";
import ProjectSummary from "./projectSummary";

const ProjectList = ({ projects }) => {
  console.log(projects);

  return (
    <div className="flex flex-col p-4 ">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
