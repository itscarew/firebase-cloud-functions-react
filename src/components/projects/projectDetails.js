import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  const { project, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signIn" />;
  } else if (project) {
    return (
      <div classNameName="container mx-auto ">
        <div className=" max-w-sm w-full lg:max-w-full lg:flex p-16 ">
          <div className=" max-w-sm w-full lg:max-w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 mb-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-3xl mb-2">
                {project.title}
              </div>
              <figure
                className="w-full overflow-hidden "
                style={{ height: "24em" }}
              >
                <img
                  class="w-full h-full object-cover object-center "
                  src={project.picURL}
                  alt="Project Pic"
                />
              </figure>

              <p className="text-gray-700 text-base">{project.content}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  Posted by {project.authorFirstName}
                  {"  "}
                  {project.authorLastName}
                </p>
                <p className="text-gray-600">
                  {" "}
                  {moment(project.createdAt.toDate()).fromNow()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div classNameName="container mx-auto ">Loading Projects</div>;
  }
};

const mapStateToProps = (state, onProps) => {
  console.log(state);
  const id = onProps.match.params.id;
  const projects = state.firestoreProject.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
