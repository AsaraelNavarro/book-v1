import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import { StyledHeader, StyledNav } from './styles/Header.styled';
import Burger from './Burger';
/* import { StyledLink } from './styles/Elements.styled'; */


export default function SiteHeader() {
    return (
        <StyledHeader>
            <StyledNav>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <Burger />
            </StyledNav>
        </StyledHeader>
    )
}


