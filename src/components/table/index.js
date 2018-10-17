import React from 'react';
import styles from './style.scss';

import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends React.Component {
  render() {
    const { characterData } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;