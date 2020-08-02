import React from 'react';
import ReactDOM from 'react-dom';

import App from '../../components/app';

const ROOT = document.querySelector('.root');

const initDefault = {
  language: 'en',
  stateTest: 'client',
  action: () => console.log('came from default state')
};

ReactDOM.hydrate(<App {...initDefault} />, ROOT);

/* document.addEventListener('load', function() {

}) */
