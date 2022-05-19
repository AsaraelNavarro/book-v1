import React from 'react';

import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'


export function SiteHeader() {
    return (
        <header className="site-header">
            <nav className="main-navigation content">
                <img src={logo} className="app-logo" alt="logo" />
                <ul>
                    <{/* Link to="/" className="nav-link">CV</Link> */}
                        {/* <Link to="/detalles/:id" className="nav-link">Detalles</Link>
                    <Link to="/categoria/:id" className="nav-link">Categoria</Link> */}
                </ul>
            </nav>
        </header>
    )
}
