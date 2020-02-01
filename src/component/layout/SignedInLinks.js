import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../redux/store/actions/auth";
const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createProject">New Project</NavLink>
      </li>
      <li>
        <a onClick={() => props.signout()}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          GB
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    authError: state.auth.authError,
    userSignOut: state.auth.signOut
  };
};

const mapDispatchToProps = {
  signout
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
