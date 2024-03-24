import '../style/gameEnd.css'

function GameEnd({bestScore, setGameEnd}){
    const handleClick = (e) => {
        setGameEnd(false);
    };
    return(
        <div className="game-end">
            <p>Game Ended! Your best score is: {bestScore}</p>
            <button onClick={handleClick}>Restart?</button>
        </div>
    )
}
export{ GameEnd }