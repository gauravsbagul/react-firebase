import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
import { getProjects } from "../../redux/store/actions/project";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projects: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = prevState;

    newState.projects = nextProps.getAllProjects;

    return newState === prevState ? prevState : newState;
  }
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.state;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            {projects ? <Notifications /> : <span>loading...</span>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getAllProjects: state.project.getProjects
  };
};

const mapDispatchToProps = {
  getProjects
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
