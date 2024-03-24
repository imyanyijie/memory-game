import '../style/cards.css'
import getIMG from '../service/getImage'
export function Card({name, url, handleClick}){

    return(
        <div className="game-card" key={name} onClick={() => handleClick(name)}>
            <img src={getIMG(url)} alt="pokemon picture" />
            <p>{name}</p>
        </div>
     )
}