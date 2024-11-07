import React, {useContext} from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

import *  as styles from "./Header.scss";

export default function Header({title, children}) {

  const {onToogleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1 className={styles.title}>{title}</h1> 
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