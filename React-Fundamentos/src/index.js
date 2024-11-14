import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import GlobalStyles from './styles/global'

ReactDOM.render(
    <>
        <GlobalStyles></GlobalStyles>
        <App></App>
    </>,
        document.getElementById('root')
)