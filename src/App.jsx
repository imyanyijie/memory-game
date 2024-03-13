import { useState } from 'react'
import './App.css'
import { Score } from './Component/Score'
import { Game } from './Component/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img
          src="https://www.eventhorizongames.com/images/images/games_logos/Pokemon-logo.png"
          alt="Pokemon Icon"
        />
        <h1>The memory game</h1>
      </header>
      <main id="gameContainer">
        <h1 id="instruction">Select a Pokemon! <br />Please remember your choice. You get points for selecting pokemon you never seen before.</h1>
        <div className='game-section'>
          <Game />
        </div>
        <Score score={1} bestScore={1}/>
      </main>
      <footer>Front-end project.</footer>

    </>
  )
}

export default App
