import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import LoginForm from "../../components/LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <AppHeader history={this.props.history} />
        <LoginForm history={this.props.history} />
      </div>
    );
  }
}

export default Login;
