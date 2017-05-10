import React, { Component } from 'react';
import Form from './Components/Form';
import { Header, Main, Footer, Wrapper } from './Styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <h2>Adding Bookmarks</h2>
        </Header>
        <Main>
          <Form />
        </Main>
        <Footer>
          <p>Footer Content</p>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
