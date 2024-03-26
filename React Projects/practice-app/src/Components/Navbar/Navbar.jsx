import './Navbar.css'
import React from 'react';

export const Navbar = () => {
    return (
        <nav>
            <div className='nav-bar'>
                <h1>NEWS</h1>
                <ul className="nav-items">
                    <li>About</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li id="Last">Conctact</li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar;