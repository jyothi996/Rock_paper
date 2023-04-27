import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #223a5f;
  padding: 34px;
  justify-content: space-between;
`

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  align-items: center;
  height: 120px;
  @media screen and (min-width: 768px) {
    margin-left: 90px;
    margin-right: 90px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
`

export const ScoreContainer = styled.div`
  margin: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`
export const ScorePara = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Roboto';
  margin: 0;
`
export const Score = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`
export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`
export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  height: 50%;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopupButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
