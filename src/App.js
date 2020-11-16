import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Nav from './Views/Nav';
import Contact from './Views/Contact';
import NotMatch from './Views/Errors/NotMatch';

function App() {
	return (	
		<div>
			<BrowserRouter>
				<Switch>
					{/* <Route path="/about" component={About} /> */}
					<Route exact path="/" component={Home}>
						<Nav>
							<Home />
						</Nav>
					</Route>
					<Route path="/about" component={About}>
						<Nav>
							<About />
						</Nav>
					</Route>
					<Route path="/contact">
						<Nav>
							<Contact />
						</Nav>
					</Route>
					<Route path="*" component={NotMatch} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App;