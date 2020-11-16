import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function Show() {
    let { identifier } = useParams();

    const [user, setUser] = useState([]);

    const getUser = async () => {
        try {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
            setUser(response.data);
          } catch (e) {
            alert.log(e.message);
          }
    }

    useEffect(() => {
        getUser();
    }, [identifier]);

    
    return (
        <div>
            {/* <div className="col-md-4 pt-3">
                <div className="card">
                    <div className="card-header">{user.name}</div>
                    <div className="card-body">
                        <p>
                            {user.usename}
                        </p>
                        <p>
                            {user.email}
                        </p>
                        <p>
                            {user.phone}
                        </p>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div class="card">
                        <div class="card-header">My Profile</div>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <tr>
                                            <td>{ user.username }</td>
                                            <td>{ user.email }</td>
                                            <td>{ user.phone }</td>
                                            <td>{ user.website }</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show;