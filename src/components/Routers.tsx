import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Home from 'routers/Home';
import Detail from 'routers/Detail';
import Iam from 'routers/Iam';
import Career from 'routers/Career';
import Portfolio from 'routers/Portfolio';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/detail/:id" component={Detail} />
				<Route path="/iam" component={Iam} />
				<Route path="/career" component={Career} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/portfolio/:id" component={Portfolio} />
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
};

export default Routers;
