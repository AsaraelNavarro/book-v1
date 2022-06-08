import React from 'react';
import { StyledMain } from '../components/styles/Layout.styled';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

function Home() {

    return (
        <StyledMain>
            <Hero />
            <About />
            <Portfolio />
        </StyledMain>
    )
}

export default Home