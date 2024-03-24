import { useState, useEffect } from 'react'
import "../style/game.css"
import { Card } from './Card'
import { DataFetch } from '../service/DataFetch';


function Game({setCurrentScore, score, setBestScore, bestScore, setGameEnd}){
    console.log("render game section");
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    let offsetNum = Math.random()*1000;
    useEffect(() => {
      (async function getPokemons() {
        const data = await DataFetch(offsetNum);
        console.log("fetching data")
        setCards(data.results);
      })();
    }, [bestScore]);
    
    //randomly postion cards
    const shuffleCards = ()=>{
        let cardList = cards
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setCards(cardList);
    }

    const handleClick = (name)=>{
        console.log("card clicked"+name)
        if(selectedCards.includes(name)){
            //game end logic
            console.log("game end "+selectedCards.length)
            setBestScore(score);
            setCurrentScore(0);
            setSelectedCards(selectedCards => [])
            setGameEnd(true);
        }
        else{
            setSelectedCards([...selectedCards, name]);
            setCurrentScore(score => score+1);
            shuffleCards();
        }

    }
     return(
        <div className='game-section' >
            {
                cards.map((poke)=>{
                    return(
                        <Card name={poke.name} url={poke.url} handleClick={handleClick}/>
                    )
                })
            }
        </div>
     )
}
export{Game}