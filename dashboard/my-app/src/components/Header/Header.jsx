import React from 'react';
import './Header.css'
import { Route, Link } from 'react-router-dom';
import Users from '../../pages/Users';

function Header() {
    return (
        <>
            <div className='header-container'>
                <h1 className='logo'>Soy el header</h1>
                <div className='nav-container'>
                    <Link to="/products">
                        <span className='nav-item'>Products</span>
                    </Link>
                    <Link to="/users">
                        <span className='nav-item'>Users</span>
                    </Link>
                </div>
                {/* <Route exact path="/products">

                </Route>
                <Route exact path="/users">
                    <Users />
                </Route> */}
            </div>
        </>
    )
}

export default Header;
