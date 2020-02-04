import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      getAppProjects: null,
      currentProject: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "TCL: ProjectDetails -> getDerivedStateFromProps -> nextProps",
      nextProps
    );
    let newState = prevState;
    if (nextProps.getAllProjects) {
      newState.getAppProjects = nextProps.getAllProjects;
      if (
        nextProps.match &&
        nextProps.match.params &&
        nextProps.match.params.id
      )
        newState.currentProject =
          nextProps.getAllProjects[nextProps.match.params.id];
    }

    return newState === prevState ? prevState : newState;
  }
  render() {
    const { getAppProjects, currentProject } = this.state;
    const { isLogin } = this.props;
    if (!isLogin) {
      return <Redirect to="/signin" />;
    }
    console.log(
      "TCL: ProjectDetails -> render -> currentProject",
      currentProject
    );
    return (
      <div className="container section project-details">
        {currentProject ? (
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{currentProject.title}</span>
              <p>{currentProject.content}</p>
            </div>
            <div className="card-action gret lighten-4 green-text">
              <div>
                Posted by {currentProject.firstName} {currentProject.lastName}
              </div>
              <div></div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getAllProjects: state.project.getProjects,
    isLogin: state.auth.login
  };
};

export default connect(mapStateToProps)(ProjectDetails);
