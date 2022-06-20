import React from 'react';
import { StyledMain } from '../components/styles/Layout.styled';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Areas from '../components/Areas';
import Blog from '../components/Blog';

function Home() {

    return (
        <StyledMain>
            <Hero />
            <About />
            <Portfolio />
            <Areas />
            <Blog />
        </StyledMain>
    )
}

export default Home