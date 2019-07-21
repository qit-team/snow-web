import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './common/redux';
import Root from './common/root';
import { Provider } from 'react-redux';

ReactDOM.render(
    (
        <Provider store={store}>
            <Root />
        </Provider>
    ), document.getElementById('root')
);

