import React, { Component } from 'react';
import auth from 'firebase/auth';
import firebase from '../../firebase';
import PropTypes from 'prop-types';

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };
  handleLogin = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(this.authHandler);
  };

  authHandler = authData => {
    authData.user.getToken().then(data => {
      this.props.onLogin(data);
    });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  render() {
    return (
      <section>
        <p>Please Login to create a new bookmarks.</p>
        <button onClick={this.handleLogin}>Login</button>
      </section>
    );
  }
}

export default Login;
