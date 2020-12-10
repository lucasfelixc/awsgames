import styled from 'styled-components'

export const Container = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .news {
    margin-bottom: 20px;
  }

  .listGames li span {
    font: 400 12px Poppins, sans-serif;

    margin: 0 15px 0 15px;
  }
`

export const Tittle = styled.div`
  display: flex;
  align-items: center;

  .bar {
    width: 4px;
    height: 15px;

    margin-right: 10px;

    background: #000000;

    border-radius: 0 5px 5px 0;
  }
`
