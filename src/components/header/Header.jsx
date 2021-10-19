import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
    <>
        <div className="topBar">
            <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="topNav">
                      <ul>
                          <li><NavLink to="/login">Login</NavLink></li>
                          <li><NavLink to ="/signup">Register</NavLink></li>
                      </ul>
                  </div>
                  </div>   
            </div>
            </div>
        </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink activeClassName="navActive" exact className="nav-link"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="navActive" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="navActive" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                  
                    </div>
                </div>
            </nav>
        
    </>  
    )
}

export default Header
