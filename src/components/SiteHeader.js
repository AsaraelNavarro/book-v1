import React from 'react'
import { Link } from 'react-router-dom'


export function SiteHeader() {
    return (
        <header>
            <nav className="main-navigation">
                <h1 className="site-header">Asarael Navarro</h1>
                <ul>
                    <Link to="/" className="nav-link">CV</Link>
                    <Link to="/detalles/:id" className="nav-link">Detalles</Link>
                    <Link to="/categoria/:id" className="nav-link">Categoria</Link>
                </ul>
            </nav>
        </header>
    )
}
