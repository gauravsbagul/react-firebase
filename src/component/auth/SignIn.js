import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../redux/store/actions/auth";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      login: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = prevState;

    newState.login = nextProps.login;

    return newState === prevState ? prevState : newState;
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { isLogin, authError } = this.props;
    if (isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)} className="white">
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.auth.login,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = {
  signIn
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
