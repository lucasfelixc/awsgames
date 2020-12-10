import React from 'react'

import { Container, ContentTop, ContentBottom } from './styles'

import GameCard from '../GameCard'

import cyberPunk from '../../../../assets/images/cyberpunkCut.png'
import valorant from '../../../../assets/images/valorant.png'
import legend from '../../../../assets/images/2k20.jpg'
import assassins from '../../../../assets/images/acreed.jpg'
import Play from '../../../../assets/icons/play.svg'
import Game from '../../../../assets/icons/game.svg'

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
          <img src={cyberPunk} alt="CyberPunk" className="mainImg" />
        </div>

        <div className="linkTrailer">
          <a href="https://www.youtube.com/watch?v=liuFhVXAlZw">
            <Play />
          </a>
        </div>
      </ContentTop>

      <div className="lineBottom"></div>

      <ContentBottom>
        <div className="tittle">
          <div className="tittleIcon">
            <Game />
          </div>

          <strong>The latest analyzes</strong>
        </div>

        <div className="contentCards">
          <GameCard
            imgCard={valorant}
            nameGame={'Valorant'}
            boxShadow={'#FF8A00'}
            note={'9,5'}
            infoOne={'PC'}
            infoTwo={'Multiplayer'}
          />

          <GameCard
            imgCard={legend}
            nameGame={'2k20 Legend Edition'}
            boxShadow={'#2DDDE7'}
            note={'8,0'}
            infoOne={'XSX'}
            infoTwo={'PS5'}
            infoThree={'PC'}
          />

          <GameCard
            imgCard={assassins}
            nameGame={'Assassins Creed Valhalla'}
            boxShadow={'#F1E9B6'}
            note={'8,5'}
            infoOne={'XSX'}
            infoTwo={'PS5'}
            infoThree={'PC'}
          />
        </div>
      </ContentBottom>
    </Container>
  )
}

export default ContentPrimary
