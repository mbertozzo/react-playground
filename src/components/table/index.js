import React from 'react';
import styles from './style.scss';

import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends React.Component {
    render() {
        return (
          <table>
            <TableHeader />
            <TableBody />
          </table>
        );
    }
}

export default Table;