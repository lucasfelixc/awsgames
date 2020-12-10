import React from 'react'

import { Container } from './styles'

import ContentPrimary from '../pages/Home/ContentPrimary'
import ContentSecondary from '../pages/Home/ContentSecondary'

function Main() {
  return (
    <Container>
      <ContentPrimary />
      <ContentSecondary />
    </Container>
  )
}

export default Main
