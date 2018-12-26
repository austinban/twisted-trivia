import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-89118704-2');

import Category from './routes/category/Category';
import Categories from './routes/categories/Categories';
import Home from './routes/home/Home';
import Penalties from './routes/penalties/Penalties';
import Rules from './routes/rules/Rules';

function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

export default (
	<Switch onUpdate={fireTracking}>
		<Route exact path="/" component={Home} />
		<Route path="/rules" component={Rules} />
    <Route path="/category" component={Category} />
    <Route path="/categories" component={Categories} />
    <Route path="/penalties" component={Penalties} />
	</Switch>
);
