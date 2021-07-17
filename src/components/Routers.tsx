import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Home from 'routers/Home';
import Detail from 'routers/Detail';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/detail/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
};

export default Routers;
