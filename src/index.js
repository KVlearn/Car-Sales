import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {carsReducer} from './reducer/carsReducer';
//Router to be included inside Provider APP
// import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carsReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
 <App/>
</Provider>, rootElement);
