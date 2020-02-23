import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layouts/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));

serviceWorker.register();
