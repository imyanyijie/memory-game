import { useState } from 'react'
import "../style/game.css"
import { Card } from './Card'

function Game({pokemons, setCurrentScore, setBestScore}){
    console.log("render game section");
    
    const [cards, setCards] = useState([...pokemons]);
    const [selectedCards, setSelectedCards] = useState([]);

    console.log(cards)
    const shuffleCards = ()=>{
        let cardList = pokemons
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setCards(cardList);
    }
    const handleClick = (e)=>{
        console.log("card clicked")
        let name = e.target.name;
        if(selectedCards.includes(name)){
            //game end logic
            console.log("game end ")
            setCurrentScore(0);
            

        }
        setSelectedCards([...selectedCards, name]);
        setCurrentScore(score => score + 1);
        shuffleCards();
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