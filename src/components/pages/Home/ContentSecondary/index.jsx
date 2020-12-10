import React from 'react'

import { Container, Tittle } from './styles'

import NewsCard from '../NewsCard'

import cosplay from '../../../../assets/images/cyberpunkCosplay.jpg'
import xbox from '../../../../assets/images/xbox.png'
import astros from '../../../../assets/images/astros.png'

function ContentSecondary() {
  const topGames = [
    'Assassins Creed Valhalla',
    'Spider-Man Miles Morales',
    'Yakuza: Like a Dragon',
    'Ghostrunner',
    'FIFA 21: Ultimate Team'
  ]

  return (
    <Container>
      <Tittle>
        <div className="bar"></div>
        <strong>Recent News</strong>
      </Tittle>
      <div className="news">
        <NewsCard
          tittle={'Cyberpunk 2077 cosplay event in november 25.'}
          date={'12/11/2020'}
          mainImg={cosplay}
          widthText={'100px'}
        />
        <NewsCard
          tittle={
            'Xbox Series X and 5 break records: best Xbox launch in history.'
          }
          date={'12/11/2020'}
          mainImg={xbox}
          widthText={'120px'}
        />
        <NewsCard
          tittle={"Astro's Playroom, new feature of dualsense control."}
          date={'12/11/2020'}
          mainImg={astros}
          widthText={'110px'}
        />
      </div>

      <Tittle>
        <div className="bar"></div>
        <strong>Top Games</strong>
      </Tittle>

      <ul className="listGames">
        {topGames.map((value, index) => {
          return (
            <li key={value}>
              <span>{index + 1}</span>
              <span>{value}</span>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ContentSecondary
