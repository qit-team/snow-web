import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root, store } from './common';
import { Provider } from 'react-redux';

ReactDOM.render(
    (
        <Provider store={store}>
            <Root />
        </Provider>
    ), document.getElementById('root')
);

