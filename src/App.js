import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function App() {
	const [identifier, setIdentifier] = useState(1);
	const [user, setUser] = useState([]);
	// const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const getUser = async () => {
		setLoading(true);

		try {
			await axios({
				method: 'get',
				url: `https://jsonplaceholder.typicode.com/users/${identifier}`,
				responseType: 'json'
			}).then(response => {
					setLoading(false);
					setUser(response.data);
				//   setUsers(response.data); 
			});
		} catch (error) {
			setLoading(true);	
			alert(error.message);		
		}
	}

	useEffect(() => {
		getUser();
		// getUser();
	}, [ identifier ]);
	

	return (	
		<div className="p-5">
			<div className="container">
				<div className="row">
					<div className="table-responsive">
					<input type="number" min="1" name="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value) } className="form-control" />
					 {
						loading ? <div>Loading . . . </div> : 

						<table className="table">
							<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">name</th>
								<th scope="col">email</th>
								<th scope="col">phone</th>
								<th scope="col">website</th>
							</tr>
							</thead>
							<tbody>
								{/* {
								users.map((user, index) => {
									return (
										<tr key={index}>
											<th scope="row">{index + 1}</th>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.address.city}</td>
											<td>{user.phone}</td>
											<td>{user.website}</td>
											<td>{user.company.name}</td>
										</tr>
									)
								})
								
								} */}
							<tr>
								<th scope="row">{user.id}</th>
								<td>{user.name}</td>	
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.website}</td>
							</tr>
							</tbody>
						</table>
					}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;