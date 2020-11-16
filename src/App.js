import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Nav from './Views/Nav';
import Contact from './Views/Contact';

function App() {
	return (	
		<div>
			<BrowserRouter>
				<Nav />
				<div className="p-2">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App;