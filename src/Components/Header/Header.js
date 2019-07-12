import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <img src='https://images.app.goo.gl/Lqu9XVhYoFrXrj6u6' alt="SHELFIE.png" />
                <NavLink exact to="/">Dashboard</NavLink>
                <NavLink to="/add">Add Inventory</NavLink>
            </div>
        );
    }
}

export default Header;