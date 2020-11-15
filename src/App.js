import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [name, setName] = useState('');
	
	const submitHandler = (e) => {
		e.preventDefault();
		setName(`${firstName} ${lastName}`);
		setFirstName('');
		setLastName('');
	}
	return (
		<div>
			<div className="p-5">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="card">
							<div className="card-header">Learning React</div>
								<div className="card-body">
									<form onSubmit={submitHandler}>
										<div className="form-group">
											<label htmlFor="lastName">Last Name</label>
											<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value) } className="form-control" name="lastName" id="lastName" placeholder="Last Name" />
										</div>
										<div className="form-group">
											<label htmlFor="firstName">First Name</label>
											<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value) } className="form-control" name="firstName" id="firstName" placeholder="First Name" />
										</div>
											<button type="submit" className="btn btn-primary btn-block">Show</button>
									</form>
								</div>
								<div className="card-footer">
									My Name is { name  ? name : '. . .' }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default App;
