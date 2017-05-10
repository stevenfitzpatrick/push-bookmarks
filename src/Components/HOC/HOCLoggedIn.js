import React, { Component } from 'react';
import Login from '../Login';

const LoggedInHoc = WrappedComponent => {
  return class LoggedIn extends Component {
    state = {
      isLoggedIn: false,
      uuid: null
    };

    onLogin = uuid => {
      this.setState({
        isLoggedIn: true,
        uuid
      });
    };

    render() {
      const { uuid, isLoggedIn } = this.state;
      return isLoggedIn
        ? <WrappedComponent {...this.props} uuid={uuid} />
        : <Login {...this.props} onLogin={this.onLogin} />;
    }
  };
};

export default LoggedInHoc;
