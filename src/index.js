import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app';

import './globals.css';

ReactDOM.render(
  <App
    getErrorMessage={value => {
      if (value.length < 3) {
        return `Value must be at least 3 characters, but is only ${value.length}`
      }
      if (!value.includes('s')) {
        return `Value does not include "s" but it should!`
      }
      return null
    }} 
  />,
  document.getElementById('app')
);


