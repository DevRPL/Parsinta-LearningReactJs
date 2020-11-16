import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../Component/Loading';
function Index() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
            setLoading(false);
            setUsers(response.data);
          } catch (e) {
            setLoading(true);
            alert(e.message);
          }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        loading ? <Loading /> :
                        users.map((user, index) => {
                            return (
                                <div className="col-md-4 pt-3" key={index}>
                                    <div className="card">
                                        <div className="card-header">{user.name}</div>
                                        <div className="card-body">
                                            <div className="mb-2">
                                                <a href={`http://${user.website}`} target="blank" className="d-block mb-2">{user.website}</a>
                                                {user.username}
                                            </div>
                                            <Link to={`/users/${user.id}`} className="btn btn-primary">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Index;