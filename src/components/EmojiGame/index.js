// Write your code here.
import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  /* state has 3 properties which specifies topScore,
   array of clicked emojis list and isGameEnd or not status */
  state = {
    topScore: 0,
    isGameEnd: false,
    clickedEmojis: [],
  }

  /* This function shuffles all the emojis in random order */
  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  /* This function updates the topScore and isGameEnd status */
  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setState({isGameEnd: true})
  }

  /* Restarts game on click play again button */
  restartGame = () => {
    this.setState({isGameEnd: false, clickedEmojis: []})
  }

  /* This function triggers on each emoji click */
  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojis: [...previousState.clickedEmojis, id],
      }))
    }
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  renderShuffledEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list">
        {shuffledEmojisList.map(emojiItem => (
          <EmojiCard
            key={emojiItem.id}
            emoji={emojiItem}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameEnd, clickedEmojis} = this.state
    const currentScore = clickedEmojis.length
    return (
      <div className="app-container">
        {/* currentScore, topScore and isGameEnd are passed as props to Navbar Component */}
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        {/* conditional rendering based on isGameEnd status */}
        <div className="emoji-game-container">
          {isGameEnd ? this.renderWinOrLose() : this.renderShuffledEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
