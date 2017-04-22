import React, { Component } from 'react';
import Game from '../../containers/Game';
import { AppWrap } from './styled';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <AppWrap>
        <Game />
      </AppWrap>
    );
  }
}

export default App;
