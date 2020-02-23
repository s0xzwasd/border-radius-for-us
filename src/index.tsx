import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layouts/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

serviceWorker.register();
