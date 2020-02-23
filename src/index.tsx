import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from './Layouts/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

serviceWorker.register();
