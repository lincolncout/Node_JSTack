import React, {useContext} from 'react';

import { Container } from './styles';

import { SelectedThemeContext } from '../../context/SelectedThemeContext';

export default function Footer() {

  const {onToogleTheme, selectedTheme} = useContext(SelectedThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        onClick={onToogleTheme} 
        type="button">
          {selectedTheme === 'dark' ? '🌞' : '🏀'}
      </button>
    </Container>
  );
}