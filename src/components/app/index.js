import React from 'react';
import styles from './style.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container">
        <h1 className={styles.title}>Hello World!</h1>
      </section>
    );
  }
}