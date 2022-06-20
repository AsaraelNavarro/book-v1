import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom";

//Page and layout imports
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Portfolio from './pages/Portfolio';
import BlogPage from './pages/BlogPage';
import Post from './pages/Post';
import theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <SiteHeader />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
