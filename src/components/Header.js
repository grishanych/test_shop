import React, { Component } from "react";
import Cart from './svg/shopping-cart-solid.svg';
import Close from './svg/times-solid.svg';
import { Link } from 'react-router-dom';
import './scss/header.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <h1><Link to="/">Product shop</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/product" >Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className="close"> <img src={Close} alt="" width="20"></img></li>
                    </ul>
                    <div className="nav-cart">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="20"></img>
                        </Link>
                    </div>
                </nav>

            </header>

        )
    }
}

export default Header;