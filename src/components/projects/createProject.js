import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";
import firebase from "../../config/firebaseConfig";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: "",
      title: "",
      content: "",
      isUploading: false,
      progress: 0,
      picURL: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
  };
  handleUploadSuccess = filename => {
    this.setState({ pic: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ picURL: url }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;

    return (
      <div className="container mx-auto">
        <div className="w-3/5 mx-auto p-16 ">
          <form
            onSubmit={this.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <p className="text-3xl">Crete A new Project</p>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="title"
                type="text"
                placeholder="Title"
                onChange={this.handleChange}
                required
              />
            </div>

            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            {this.state.picURL ? (
              <figure
                className="w-2/4 overflow-hidden block "
                style={{ height: "20em" }}
              >
                <img
                  className="w-full h-full object-cover "
                  src={this.state.picURL}
                  alt="pic"
                />
              </figure>
            ) : (
              <div className="mb-4" uk-icon="icon: camera;  ratio: 6 "></div>
            )}

            <div className="mb-6 ">
              <label
                style={{
                  backgroundColor: "steelblue",
                  color: "white",
                  padding: 10,
                  borderRadius: 4,
                  cursor: "pointer",
                  marginBottom: "0.5rem"
                }}
              >
                Select your awesome avatar
                <FileUploader
                  hidden
                  accept="image/*"
                  name="pic"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Content
              </label>

              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="content"
                type="text"
                placeholder="Content"
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
