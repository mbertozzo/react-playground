import React from 'react';
import styles from './style.scss';

import Table from './../table';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          'name': 'Charlie',
          'job': 'Janitor'
        },
        {
          'name': 'Mac',
          'job': 'Bouncer'
        },
        {
          'name': 'Dee',
          'job': 'Aspring actress'
        },
        {
          'name': 'Dennis',
          'job': 'Bartender'
        }
      ]
    }
    this.removeCharacter = this.removeCharacter.bind(this);
  }

  removeCharacter (index) {
    const chars = this.state.characters;

    this.setState({
      characters: chars.filter((char, i) => {
        return i !== index;
      })
    })
  }

  render() {
    return (
      <section className="container">
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter} />
      </section>
    );
  }
}