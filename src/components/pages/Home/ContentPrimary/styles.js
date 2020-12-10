import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 100%;

  .lineBottom {
    width: 100%;
    height: 1px;

    background: #d2d2d2;

    margin: 5px 0 10px 0;
  }
`

export const ContentTop = styled.div`
  width: 100%;
  height: 70%;

  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .infos {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    margin-right: 100px;
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

    transition: all 0.3s;
    -webkit-transition: all 0.3s;

    :hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
    }
  }

  .linkTrailer {
    position: absolute;

    svg {
      width: 100px;
      height: 100px;

      transition: all 0.3s;
      -webkit-transition: all 0.3s;
    }

    :hover {
      svg {
        transform: scale(1.05);
        -webkit-transform: scale(1.05);
      }
    }
  }
`

export const ContentBottom = styled.div`
  width: 100%;
  height: 30%;

  .tittle {
    display: flex;
    align-items: center;
  }

  .tittle .tittleIcon {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #000000;

    margin: 0 20px 0 40px;

    border-radius: 14px;
  }

  .tittle strong {
    font: 700 20px Poppins, sans-serif;
  }

  .contentCards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-top: 20px;
  }
`
