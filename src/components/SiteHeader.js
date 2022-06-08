import React from 'react';

import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { StyledHeader, StyledNav } from './styles/Header.styled';


export default function SiteHeader() {
    return (
        <StyledHeader>
            <StyledNav>
                <Link to="/"><img src={logo} alt="logo" /></Link>

                <ul>
                    <Link to="/">Inicio</Link>
                    <Link to="/cv">CV</Link>
                    {/* <Link to="/detalles/:id" className="nav-link">Detalles</Link>
                    <Link to="/categoria/:id" className="nav-link">Categoria</Link> */}
                </ul>
            </StyledNav>
        </StyledHeader>
    )
}


