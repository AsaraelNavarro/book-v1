import React from 'react';
import { StyledMain } from '../components/styles/Layout.styled';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Areas from '../components/Areas';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

function Home() {

    return (
        <StyledMain>
            <Hero />
            <About />
            <Portfolio />
            <Areas />
            <Blog />
            <Footer />
        </StyledMain>
    )
}

export default Home