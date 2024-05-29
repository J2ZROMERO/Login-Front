// Header.js
import React from 'react';
import Sidebar from './SideBar';

function Header() {
    const loggedInEmail = localStorage.getItem('email_usuario');

    return (
        <header className="container d-flex justify-content-between align-items-center">
            <Sidebar/> 



            {loggedInEmail && <p className="user-email">Bienvenido, {loggedInEmail}</p>}
        </header>
    );
}

export default Header;
