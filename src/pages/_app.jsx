import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default MyApp
