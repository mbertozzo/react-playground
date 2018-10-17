import React from 'react';
import styles from './style.scss';
import buttons from './buttons.scss';

import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends React.Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody 
          characterData={characterData}
          removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;