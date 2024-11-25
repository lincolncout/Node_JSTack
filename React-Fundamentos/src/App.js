import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

import { SelectedThemeProvider } from './context/SelectedThemeContext';


function App() {
  return (
    <SelectedThemeProvider>
        <GlobalStyle />
        <Layout />
    </SelectedThemeProvider>
  );
};

export default App;