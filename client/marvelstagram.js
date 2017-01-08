import React from "react";
import { render } from 'react-dom';
import axios from 'axios';


// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Detail from './components/Detail';
import HerosGrid from './components/HerosGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import { Provider } from 'react-redux';
import store, { history } from './store';



const router = (
	<Provider store={store}>
		<Router history={browserHistory}>
	      <Route path="/" component={App}>
	        <IndexRoute component={HerosGrid}></IndexRoute>
	        <Route path="/heros/:heroId" component={Detail}></Route>
	      </Route>
	    </Router>
    </Provider>
)

render(router, 
	document.getElementById('root'));