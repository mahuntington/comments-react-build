import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/comments.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render(
    <Provider store={store}>
        <Comments></Comments>
    </Provider>,
    document.querySelector('main')
);
