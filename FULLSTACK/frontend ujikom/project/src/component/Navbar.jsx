/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
// import assets from '../assets/cart.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Cinema</h1>
            <ul className='navbar-links'>
            <div className="navbar-tittle">
            {/* <img src={assets} alt="cart" className="cart-icon" /> */}
            </div>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/seat">Seat</Link></li>
                <li><Link to="/pembayaran">Pembayaran</Link></li>
                <li><Link to="/ticket/list">Tiket list</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;