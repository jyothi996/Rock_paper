import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'

import {
  GameContainer,
  ScoreCardContainer,
  Heading,
  ScoreContainer,
  ScorePara,
  Score,
  PopupContainer,
  PopupButton,
  RulesImageContainer,
  RulesImage,
  CloseLineButton,
  CloseLineContainer,
  ItemsImagesContainer,
} from './styledComponents'

class Game extends Component {
  state = {
    myChoice: {},
    score: 0,
    opponentChoice: {},
    showResult: false,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    // const {id, image} = opponentChoice
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  getImageId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachImage => (
          <Buttons
            key={eachImage.id}
            imageDetails={eachImage}
            onGetId={this.getImageId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score} = this.state
    return (
      <GameContainer>
        <ScoreCardContainer>
          <Heading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <ScorePara>Score</ScorePara>
            <Score>{score}</Score>
          </ScoreContainer>
        </ScoreCardContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopupContainer>
          <Popup modal trigger={<PopupButton>Rules</PopupButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}
export default Game
