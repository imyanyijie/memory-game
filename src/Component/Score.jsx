import React from "react";
import "../style/score.css";

function Score({score, bestScore}){
    return(
        <div className="score-section">
            <p>The score for this round is: {score}</p>
            <p>The best score is: {bestScore}</p>
        </div>
    )
}
export{ Score };