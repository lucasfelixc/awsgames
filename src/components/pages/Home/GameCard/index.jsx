import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function GameCard({
  imgCard,
  nameGame,
  boxShadow,
  note,
  infoOne,
  infoTwo,
  infoThree
}) {
  return (
    <Container
      boxShadow={boxShadow}
      infoOne={infoOne}
      infoTwo={infoTwo}
      infoThree={infoThree}
    >
      <div className="contentImage">
        <div className="imgCard">
          <img src={imgCard} alt="Imagem do card" />
        </div>
        <div className="info One">
          <span>{infoOne}</span>
        </div>
        <div className="info Two">
          <span>{infoTwo}</span>
        </div>
        <div className="info Three">
          <span>{infoThree}</span>
        </div>
      </div>

      <div className="contentNote">
        <span>{note}</span>
      </div>

      <strong className="mainName">{nameGame}</strong>
    </Container>
  )
}

GameCard.propTypes = {
  imgCard: PropTypes.element.isRequired,
  nameGame: PropTypes.string.isRequired,
  boxShadow: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  infoOne: PropTypes.string,
  infoTwo: PropTypes.string,
  infoThree: PropTypes.string
}

export default GameCard
