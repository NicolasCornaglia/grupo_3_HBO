import React from 'react';
import './Header.css'
import { Routes, Route, Link } from 'react-router-dom';
import Users from '../../pages/Users';
import logo from '../../logo.png';

function Header() {
    return (
        <div>
            <div className='header-container'>
                <Link to="/">
                   <img src={logo}/> 
                </Link>

                <div className='nav-container'>
                    <Link to="/products">
                        <span className='nav-item'>Products</span>
                    </Link>
                    <Link to="/users">
                        <span className='nav-item'>Users</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
