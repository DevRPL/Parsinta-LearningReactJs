import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


function Router() {

    return (
            <div>
                 <ul className="navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">User</NavLink>
                        </li>
                    </ul>
                </ul>
            </div>
    )
}

export default Router;