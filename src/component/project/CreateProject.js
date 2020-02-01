import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../redux/store/actions/project";

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = e => {
    console.log("TCL: CreateProject -> e", e.target.id);
    console.log("TCL: CreateProject -> e.target.value", e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log("TCL: CreateProject ->  e", this.state);
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
export default connect(null, mapDispatchToProps)(CreateProject);
