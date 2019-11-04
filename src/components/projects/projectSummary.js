import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="max-w-2xl mb-16 rounded overflow-hidden shadow-lg">
        <figure className="w-full overflow-hidden " style={{ height: "24em" }}>
          <img
            className="w-full h-full object-cover "
            src={project.picURL}
            alt="Project Pic"
          />
        </figure>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> {project.title}</div>
          <p className="text-gray-700 text-base">{project.content}</p>
        </div>
        <div className="flex items-center px-6 py-4  ">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={project.picURL}
            alt="Avatar of Author"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">
              {" "}
              {project.authorFirstName} {project.authorLastName}{" "}
            </p>
            <p className="text-gray-600">
              {" "}
              {moment(project.createdAt.toDate()).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSummary;
