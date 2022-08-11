
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/portfolio">Portfolio</a>
            </div>
            <div>
                <a href="/contact">Contact</a>
            </div>

        </nav>

    )
}

export default Navbar;