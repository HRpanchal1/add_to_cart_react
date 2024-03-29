import React from 'react';
// import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import "./style/navbar.css"

const Navbar = ({size ,setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={() =>setShow(true)}>
                My web
            </span>
            <div className="cart" onClick={() =>setShow(false)}>
                <span>
                 <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar