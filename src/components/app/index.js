import React from 'react';
import styles from './style.scss';

import Table from './../table';

export class App extends React.Component {
  render() {
    const characters = [
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
    ];

    return (
      <section className={styles.container}>
        <Table characterData={characters} />
      </section>
    );
  }
}