import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
const NavBar = props => {
  console.log("TCL:NavBar props", props);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          React Firebase
        </Link>
        {props.isLogin ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log("TCL: mapStateToProps state", state);
  return {
    isLogin: state.auth.login ? true : false
  };
};
export default connect(mapStateToProps)(NavBar);
