import React from 'react';
import styles from './style.scss';

import Table from './../table';

export class App extends React.Component {
  render() {
    return (
      <section className={styles.container}>
        <Table />
      </section>
    );
  }
}