import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div >
            <ul>
                <div><NavLink exact to='/' className='navlist'>Home</NavLink></div>
                <div><NavLink exact to='weather' className='navlist'>Weather</NavLink></div>
            </ul>
            <div className='weather'>Weather</div>
            <div className='one'></div>
            <div className='two'></div>

        </div>
     );
}
 
export default Navbar;