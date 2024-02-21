// Write your code here.
import './index.css'

const NavBar = props => {
  const renderScores = () => {
    const {currentScore, topScore, isGameEnd} = props

    /* conditional rendering if isGameEnd is true then score details shouldn't be displayed on navbar */
    if (isGameEnd) {
      return null
    }
    return (
      <div className="Score-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <nav className="navbar-container">
      <li className="logo-title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="app-logo"
        />
        <h1 className="navbar-title">Emoji Game</h1>
      </li>
      {renderScores()}
    </nav>
  )
}

export default NavBar
