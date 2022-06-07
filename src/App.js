import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom";

//Page and layout imports
import Home from './pages/Home';
import Cv from './pages/Cv';
import SiteHeader from './components/SiteHeader';
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
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
