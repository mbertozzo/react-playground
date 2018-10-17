import React from 'react';
import styles from './style.scss';

import Table from './../table';
import Form from './../form';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
    this.removeCharacter = this.removeCharacter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  removeCharacter (index) {
    const chars = this.state.characters;

    this.setState({
      characters: chars.filter((char, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit (character) {
    this.setState({characters: [...this.state.characters, character ]});
  }

  render() {
    return (
      <section className="container">
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </section>
    );
  }
}