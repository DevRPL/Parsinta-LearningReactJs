import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';

function Nav({ children }) {
    return (
       <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">My React</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Router />
                </div>
            </nav>

            <div className="p-3">
                { children }
            </div>
       </div>
    )
}

export default Nav;