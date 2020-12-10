import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 100%;
`

export const ContentTop = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .infos {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .infos .line {
    width: 40px;
    height: 5px;

    margin-bottom: 30px;

    border-radius: 5px;
    background: ${props => props.theme.colors.primary};
  }

  .infos .text {
    font: 600 45px Poppins, sans-serif;
  }

  .infos .sell {
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 30px 0 0 36.94px;

    border-radius: 15px;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

    span {
      font: 700 16px Poppins, sans-serif;
      padding-left: 30px;
    }

    button {
      width: 100px;
      height: 40px;

      font: 700 12px Poppins, sans-serif;
      color: ${props => props.theme.colors.textLight};

      background: #000000;

      border-radius: 15px;

      transition: 0.25s;

      :hover {
        background: #1f1d1d;
        color: #ffffff;
      }
    }
  }

  .imgMain img {
    width: 406.89px;
    height: 354.25px;
  }

  .linkTrailer {
    position: absolute;

    svg {
      width: 100px;
      height: 100px;

      transition: 0.4s;
    }

    :hover {
      svg {
        width: 110px;
        height: 110px;
      }
    }
  }
`
