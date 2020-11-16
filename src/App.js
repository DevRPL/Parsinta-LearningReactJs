import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardComponent from './Component/CardComponent';

function App() {
	return (
		<div className="p-5">
			<div className="container">
				<div className="row">
					<CardComponent content={{ title:"Card title 1", img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} />
					<CardComponent content={{ title:"Card title 2", img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} />
					<CardComponent content={{ title:"Card title 3", img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} />
					<CardComponent content={{ title:"Card title 4", img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }} />
				</div>
			</div>
		</div>
	)
}

export default App;