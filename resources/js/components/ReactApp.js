import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function ReactApp() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">ReactApp Component</div>

                        <div className="card-body">I'm a ReactApp component w/'react-router-dom'!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReactApp;

if (document.getElementById('reactApp')) {
    ReactDOM.render(<ReactApp />, document.getElementById('reactApp'));
}
