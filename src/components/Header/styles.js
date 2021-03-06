import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;

  .logo {
    width: 135.2px;
    height: 18.2px;
  }

  .linksContent {
    width: 45%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .linksContent ul {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .contentSearch {
    position: absolute;

    right: 156px;
  }

  .contentSearch .show {
    width: 200px;
    height: 30px;

    border: 1px solid #c4c4c4;
    border-right: none;

    padding: 0 0 0 10px;

    border-radius: 10px 0 0 10px;

    transition: 0.2s;

    :focus-within {
      border: 2px solid ${props => props.theme.colors.primary};
      border-right: none;
    }
  }

  .contentSearch .hide {
    width: 0px;
    height: 0px;

    border: none;

    transition: 0.2s;
  }
`

export const Points = styled.li`
  height: 100%;

  display: flex;
  justify-items: center;
  align-items: center;

  .select {
    display: none;

    width: 100%;
    height: 30px;

    background: ${props => props.theme.colors.primary};

    border-radius: 0 0 30px 30px;

    position: absolute;
    top: 0px;
  }

  ${props => {
    if (props.pressed) {
      return css`
        position: relative;

        .select {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: ${props => props.theme.colors.text};
        }
      `
    }
  }}
`

export const Search = styled.button`
  width: 65px;
  height: 65px;

  z-index: 10;

  background: ${props => props.theme.colors.background};

  border-radius: 23px;
  border: 1px solid #c4c4c4;

  transition: 0.25s;

  :hover {
    background: #efeeee;
  }

  ${props => {
    if (props.shadow) {
      return css`
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      `
    }
  }}
`

export const LinkHeader = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondaryText};

  ${props => {
    if (props.moreOptions) {
      return css`
        width: 50px;
        height: 50px;

        border-radius: 50% 50%;

        transition: 0.25s;

        :hover {
          background: #efeeee;
        }

        :target {
          background: red;
        }
      `
    }
  }}
`

export const InputSearch = styled.input``
