import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h6>this is footer</h6>
            </footer>
        </div>
    );
};

export default Layout;