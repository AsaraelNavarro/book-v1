import React from 'react';
import { StyledMain } from '../components/styles/Layout.styled';
import Hero from '../components/Hero';
import About from '../components/About';

function Home() {

    return (
        <StyledMain>
            <Hero />
            <About />
        </StyledMain>
    )
}

export default Home