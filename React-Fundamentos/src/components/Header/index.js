import React, { useContext } from 'react';

import { Container } from './styles';

import { SelectedThemeContext } from '../../context/SelectedThemeContext';

export default function Header() {

  const {onToogleTheme, selectedTheme} = useContext(SelectedThemeContext);
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        onClick={onToogleTheme} 
        type="button">
          {selectedTheme === 'dark' ? '🌞' : '🏀'}
      </button>
    </Container>
  );
}