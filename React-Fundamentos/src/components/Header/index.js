import React, {useContext} from "react";
import PropTypes from "prop-types";

import Title from '../Title'

import Button from "../Button";

import { ThemeContext } from "../../context/ThemeContext";


export default function Header({title, children}) {

  const {onToogleTheme} = useContext(ThemeContext)

  return (
    <div>
      <Title>{title}</Title> 
      <Button onClick={onToogleTheme}>Mudar Tema</Button>
      {children}
    </div>
  )
}

Header.propTypes = {
  title:  PropTypes.string.isRequired,
  children:  PropTypes.node.isRequired
}

Header.defaultProps = {
  title: `Jstack's blog`
}