import {
  ShowResultContainer,
  ResultTextImgContainer,
  ResultTextImg,
  Text,
  Image,
  PlayAgainContainer,
  PlayButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultTextImgContainer>
        <ResultTextImg>
          <Text>YOU</Text>
          <Image src={myChoice[1]} alt="your choice" />
        </ResultTextImg>
        <ResultTextImg>
          <Text>OPPONENT</Text>
          <Image src={imageUrl} alt="opponent choice" />
        </ResultTextImg>
      </ResultTextImgContainer>
      <Text>{resultMessage}</Text>
      <PlayAgainContainer>
        <PlayButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayButton>
      </PlayAgainContainer>
    </ShowResultContainer>
  )
}
export default GameResultView
