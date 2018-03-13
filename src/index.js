import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import Header from './components/header'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
