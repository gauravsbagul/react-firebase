import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      getAppProjects: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = prevState;
    newState.getAppProjects = nextProps.getAllProjects;
    return newState === prevState ? prevState : newState;
  }
  render() {
    const { getAppProjects } = this.state;
    const { isLogin } = this.props;
    if (!isLogin) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container section project-details">
        {getAppProjects ? (
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{getAppProjects.title}</span>
              <p>{getAppProjects.content}</p>
            </div>
            <div className="card-action gret lighten-4 green-text">
              <div>
                Posted by {getAppProjects.firstName} {getAppProjects.lastName}
              </div>
              <div></div>
            </div>
          </div>
        ) : (
          <div>1st feb 3pm</div>
        )}
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
