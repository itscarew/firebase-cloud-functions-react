import React, { Component } from "react";
import ProjectList from "../projects/projectList";
import Notification from "../dashboard/notification";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props);
    const { projects, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signIn" />;

    return (
      <div className="container mx-auto">
        <div className="flex">
          <div
            className="w-4/6  overflow-y-auto  "
            style={{ height: "90vh", minHeight: "90vh" }}
          >
            <ProjectList projects={projects} />
          </div>
          <div
            className="w-2/6 overflow-y-auto "
            style={{ height: "90vh", minHeight: "90vh" }}
          >
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    projects: state.firestoreProject.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
