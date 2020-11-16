import React from 'react';

function Loading() {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="row justify-content-center">
                <strong>Loading...</strong>
            </div>
            </div>
    )
}

export default Loading;