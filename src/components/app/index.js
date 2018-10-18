import React from 'react';

import Header from './../header';
import Main from './../main';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}