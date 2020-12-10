import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: #f0f0f0;

  border-radius: 0 20px 20px 0;

  margin: 20px 0;

  .infos .line {
    width: 20px;
    height: 2px;

    background: #000000;

    border-radius: 5px;
  }

  .infos .tittleNew {
    max-width: ${props => props.widthText};

    font: 600 12px Poppins, sans-serif;

    margin: 10px 0 10px 0;
  }

  .infos .date {
    font: 400 12px Poppins, sans-serif;
    color: #6c6363;
  }

  .mainImg {
    width: 85.41px;
    height: 117.38px;

    border-radius: 20px;

    margin: 10px;
  }

  .mainImg img {
    width: 100%;

    border-radius: 20px;
  }
`
