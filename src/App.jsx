import { useState, useEffect } from 'react'
import './App.css'
import { Score } from './Component/Score'
import { Game } from './Component/Game'
import { DataFetch } from './service/DataFetch'

/*TODO:
App will reload only when game change. when game end/bestscore need to be updated. repull all the data

game will hold all the logic to split data and random pick. onclick too
card will render card only
whe
*/ 
function App() {
  const [bestScore, setBestScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [current, setCurrentScore] = useState(0);
  console.log("load app");
  let offsetNum = Math.random()*1000;
  useEffect(() => {
    (async function getPokemons() {
      const data = await DataFetch(offsetNum);
      console.log("fetching data")
      setPokemons(data.results);
    })();
  }, [bestScore]);


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
        <Game pokemons ={pokemons} setBestScore = {setBestScore}  setCurrentScore = {setCurrentScore}/>

        <Score score={current} bestScore={bestScore}/>
      </main>
      <footer>Front-end project.</footer>

    </>
  )
}

export default App
