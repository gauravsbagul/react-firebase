import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signout } from "../../redux/store/actions/auth";
const SignedInLinks = props => {
  console.log("TCL: SignedInLinks props", props);
  const initials = "GB";

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
          {initials}
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
