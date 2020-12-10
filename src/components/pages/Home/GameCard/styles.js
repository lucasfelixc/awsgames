import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;

  background: #f0f0f0;

  border-radius: 30px;

  position: relative;

  margin-bottom: 50px;

  .contentImage {
    height: 90%;
    height: 173.13px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;

    margin: 10px;

    box-shadow: 0px 4px 20px ${props => props.boxShadow};

    position: relative;

    .info {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;

      background: rgba(196, 196, 196, 0.36);
      backdrop-filter: blur(5px);

      border-radius: 10px;

      border: 0.2px solid #989898;

      span {
        padding: 5px;

        font: 700 14px Poppins, sans-serif;

        color: #ffffff;
      }
    }

    .One {
      transform: translate(-110px, 50px);

      display: ${props => (props.infoOne ? 'flex' : 'none')};
    }

    .Two {
      transform: translate(-30px, 50px);

      display: ${props => (props.infoTwo ? 'flex' : 'none')};
    }

    .Three {
      transform: translate(50px, 50px);

      display: ${props => (props.infoThree ? 'flex' : 'none')};
    }
  }

  .imgCard {
    width: 100%;
    height: 173.14px;

    border-radius: 30px;

    overflow: hidden;

    :hover img {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
    }
  }

  .imgCard img {
    max-width: 100%;

    border-radius: 30px;

    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  .contentNote {
    width: 55px;
    height: 55px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;

    transform: translate(245px, 150px);

    background: rgba(196, 196, 196, 0.36);

    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);

    border-radius: 20px;

    span {
      font: 700 18px Poppins, sans-serif;
      color: #ffffff;
    }
  }

  .mainName {
    font: 600 18px Poppins, sans-serif;

    padding: 15px 0 15px 40px;
  }
`
