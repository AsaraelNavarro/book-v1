import React from 'react';
import heroImage from ".././images/avatar.svg"
import { StyledHero, ColumnHero } from './styles/Layout.styled';
import { Button } from './styles/Elements.styled';

export default function Hero() {
    return (
        <StyledHero>
            <ColumnHero>
                <h4>Hola, mi nombre es</h4>
                <h1>Asarael <span>Navarro</span></h1>
                <h3>diseño & construyo paginas web</h3>
                <p>Diseñador gráfico en una travesía para convertirme en desarrollador fullstack.</p>
                <Button>Mi CV</Button>
            </ColumnHero>
            <ColumnHero>
                <img src={heroImage} alt="logo" />
            </ColumnHero>
        </StyledHero>
    )
}
