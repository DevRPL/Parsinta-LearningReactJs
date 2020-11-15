import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {

	constructor() {
		super();
		this.state = {
			lastName: '',
			firstName: '',
			name: ''
		}
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value

		})
	}

	submitHandler = (e) => {
		e.preventDefault();
		const people = this.state;
		this.setState({
			name: `${people.firstName} ${people.lastName}`
		})
		
		people.firstName = '';
		people.lastName = '';
	}

	render() {
		return (
			<div>
				<div className="p-5">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="card">
								<div className="card-header">Learning React</div>
									<div className="card-body">
										<form onSubmit={this.submitHandler}>
											<div className="form-group">
												<label htmlFor="lastName">Last Name</label>
												<input type="text" value={this.state.lastName} onChange={this.changeHandler} className="form-control" name="lastName" id="lastName" placeholder="Last Name" />
											</div>
											<div className="form-group">
												<label htmlFor="firstName">First Name</label>
												<input type="text" value={this.state.firstName} onChange={this.changeHandler} className="form-control" name="firstName" id="firstName" placeholder="First Name" />
											</div>
												<button type="submit" className="btn btn-primary btn-block">Show</button>
										</form>
									</div>
									<div className="card-footer">
										My Name is { this.state.name  ? this.state.name : '. . .' }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
