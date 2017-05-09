import React, { Component } from 'react';
import auth from 'firebase/auth';
import firebase from './firebase';

class Login extends Component {
  handleLogin = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(this.authHandler);
  };

  authHandler = authData => {
    const uuid = authData.uid;
    this.props.onLogin(uuid);
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
