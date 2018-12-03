import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


// const composeWithDevTools =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware())
    );

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.querySelector('#root'));