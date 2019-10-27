import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="max-w-sm w-full lg:max-w-full lg:flex  ">
        <div className="max-w-sm w-full lg:max-w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 mb-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-3xl mb-2">
              {project.title}
            </div>
            {/* <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p> */}
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">
                Posted by {project.authorFirstName} {project.authorLastName}
              </p>
              <p className="text-gray-600">Aug 18, 2am</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSummary;
