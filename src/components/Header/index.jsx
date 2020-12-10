import React, { useState } from 'react'

import { Container, Search, LinkHeader, Points } from './styles'

import AwsGamesLogo from '../../assets/icons/awsGames.svg'
import More from '../../assets/icons/more.svg'
import SearchIcon from '../../assets/icons/search.svg'
import Line from '../../assets/icons/line.svg'

function Header() {
  const [pressedHome, setPressedHome] = useState(true)
  const [pressedStore, setPressedStore] = useState(false)
  const [pressedBlog, setPressedBlog] = useState(false)
  const [pressedGallery, setPressedGallery] = useState(false)
  const [pressedReviews, setPressedReviews] = useState(false)

  function handleClickHome() {
    setPressedHome(true)
    setPressedStore(false)
    setPressedBlog(false)
    setPressedGallery(false)
    setPressedReviews(false)
  }

  function handleClickStore() {
    setPressedHome(false)
    setPressedStore(true)
    setPressedBlog(false)
    setPressedGallery(false)
    setPressedReviews(false)
  }

  function handleClickBlog() {
    setPressedHome(false)
    setPressedStore(false)
    setPressedBlog(true)
    setPressedGallery(false)
    setPressedReviews(false)
  }

  function handleClickGallery() {
    setPressedHome(false)
    setPressedStore(false)
    setPressedBlog(false)
    setPressedGallery(true)
    setPressedReviews(false)
  }

  function handleClickReviews() {
    setPressedHome(false)
    setPressedStore(false)
    setPressedBlog(false)
    setPressedGallery(false)
    setPressedReviews(true)
  }

  return (
    <Container>
      <AwsGamesLogo className="logo" />

      <div className="linksContent">
        <ul>
          <Points pressed={pressedHome}>
            <div className="select">
              <Line />
            </div>
            <LinkHeader onClick={handleClickHome}>Home</LinkHeader>
          </Points>
          <Points pressed={pressedStore}>
            <div className="select">
              <Line />
            </div>
            <LinkHeader onClick={handleClickStore}>Store</LinkHeader>
          </Points>
          <Points pressed={pressedBlog}>
            <div className="select">
              <Line />
            </div>
            <LinkHeader onClick={handleClickBlog}>Blog</LinkHeader>
          </Points>
          <Points pressed={pressedGallery}>
            <div className="select">
              <Line />
            </div>
            <LinkHeader onClick={handleClickGallery}>Gallery</LinkHeader>
          </Points>
          <Points pressed={pressedReviews}>
            <div className="select">
              <Line />
            </div>
            <LinkHeader onClick={handleClickReviews}>Reviews</LinkHeader>
          </Points>
          <li>
            <LinkHeader moreOptions={true}>
              <More />
            </LinkHeader>
          </li>
        </ul>
      </div>

      <Search>
        <SearchIcon />
      </Search>
    </Container>
  )
}

export default Header
