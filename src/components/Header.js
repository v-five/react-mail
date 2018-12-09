
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return ( 
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="/">React Mail</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">View recipients</a>
                    <a className="nav-item nav-link" href="/create-recipient">Create recipient</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
