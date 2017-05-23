import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/comments.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

// fetch('https://stupidcomments.herokuapp.com/comments').then(function(response){
//     response.json().then(function(data){
//         console.log(data);
//     });
// });
// fetch(
//     'https://stupidcomments.herokuapp.com/comments',
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({ body:'again from react' })
//     }
// ).then(function(response){
//     response.json().then(function(data){
//         console.log(data);
//     });
// });

ReactDOM.render(
    <Provider store={store}>
        <Comments></Comments>
    </Provider>,
    document.querySelector('main')
);
