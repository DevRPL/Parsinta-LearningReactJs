import React from 'react';
import { Link } from 'react-router-dom';

function NotMatch() {

    return (
        <div>
            <div className="container">
                <div className="text-center text-danger row  p-5 vh-100 align-items-center">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions pt-3">
                                <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    Back To Home </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NotMatch;