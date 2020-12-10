import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function NewsCard({ tittle, date, mainImg, widthText }) {
  return (
    <Container widthText={widthText}>
      <div className="infos">
        <div className="line"></div>
        <p className="tittleNew">{tittle}</p>
        <span className="date">{date}</span>
      </div>

      <div className="mainImg">
        <img src={mainImg} alt="Imagem principal da new" />
      </div>
    </Container>
  )
}

NewsCard.propTypes = {
  tittle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  mainImg: PropTypes.element.isRequired,
  widthText: PropTypes.string.isRequired
}

export default NewsCard
