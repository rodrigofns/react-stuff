import React from 'react';
import ReactDOM from 'react-dom';
import 'material-components-web/dist/material-components-web.min.css';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
