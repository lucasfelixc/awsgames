import React from 'react'

import { Container, ContentTop } from './styles'

import cyberPunk from '../../../../assets/images/cyberpunkCut.png'
import Play from '../../../../assets/icons/play.svg'

function ContentPrimary() {
  return (
    <Container>
      <ContentTop>
        <div className="infos">
          <div className="line"></div>

          <p className="text">
            Pre-order
            <br />
            Cyberpunk 2077
            <br />
            Right now
          </p>

          <div className="sell">
            <span>£ 59</span>
            <button>Pre-order</button>
          </div>
        </div>
        <div className="imgMain">
          <img src={cyberPunk} alt="CyberPunk" />
        </div>
        <div className="linkTrailer">
          <a href="https://www.youtube.com/watch?v=liuFhVXAlZw">
            <Play />
          </a>
        </div>
      </ContentTop>
    </Container>
  )
}

export default ContentPrimary
