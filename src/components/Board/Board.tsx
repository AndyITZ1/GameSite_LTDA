import { useState } from "react";
import GameBoard from "../GameBoard/GameBoard";
import './Board.css';

export default function Board() {

    // const [roundsText, setRoundsText] = useState<string>("No rounds yet!");
    const [rounds, setRounds] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [winText, setWinText] = useState("VS");
    const [playerChoice, setPlayerChoice] = useState(0);
    const [cpuChoice, setCpuChoice] = useState(0);


    function reset() {
        setRounds(0);
        setPlayerScore(0);
        setCpuScore(0);
        setWinText("VS");
        setPlayerChoice(0);
        setCpuChoice(0);
    }

    return (
        <div className="board">
            <h2>Rock, Paper, Scissors!</h2>
            {rounds > 0 ? 
            <h2>Round: {rounds}</h2>
            : <h2>No rounds yet!</h2>}
            <div id="game">
                <GameBoard playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} cpuChoice={cpuChoice} setCpuChoice={setCpuChoice} winText={winText} setWinText={setWinText} rounds={rounds} setRounds={setRounds} pScore={playerScore} updatePScore={setPlayerScore} cScore={cpuScore} updateCScore={setCpuScore}/>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
