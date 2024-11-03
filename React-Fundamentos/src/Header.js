import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

export default function Header({title, children}) {

  const {onToogleTheme} = useContext(ThemeContext)

  return (
    <>
      <h1>{title}</h1> 
      <Button onClick={onToogleTheme}>Mudar Tema</Button>
      {children}
    </>
  )
}

Header.propTypes = {
  title:  PropTypes.string.isRequired,
  children:  PropTypes.node.isRequired
}

Header.defaultProps = {
  title: `Jstack's blog`
}