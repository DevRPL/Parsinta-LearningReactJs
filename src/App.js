import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
	constructor() {
		super();
		this.state = {
			todo: []
		}
		
	}
	
	getTodo = async () => {
		await axios({
			method: 'get',
			url: 'https://jsonplaceholder.typicode.com/todos/16',
			responseType: 'json'
		  }).then(response => {
			this.setState({
				todo:response.data
			})
		});
	}

	componentDidMount() {
		this.getTodo();
	}

	render() {
		const { todo } = this.state;
		return (
			<div>
				<p>My Name is {todo.title}</p>
				<p>Completed is  { todo.completed ? 'true' : 'false' }</p>
			</div>
		);
	}
}

export default App;
