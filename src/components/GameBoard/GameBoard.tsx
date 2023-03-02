import { useState } from "react";
import './GameBoard.css';

export default function GameBoard(props: any) {
    const [cpuImage, setCpuImage] = useState(<></>);

    function playGame(pChoice: number) {
        props.setRounds(props.rounds + 1);
        props.setPlayerChoice(pChoice);
        let cChoice = Math.floor(Math.random() * 3) + 1;
        props.setCpuChoice(cChoice);
        
        console.log(pChoice);
        console.log(cChoice);
        if (pChoice === cChoice) {
            props.setWinText("It's a tie!");
        }
        else if ((pChoice === 1 && cChoice === 2) ||
                    (pChoice === 3 && cChoice === 1) ||
                    (pChoice === 2 && cChoice === 3)) {
            props.setWinText("You lost!");
            props.updateCScore(props.cScore + 1);
        }
        else {
            props.setWinText("You won!");
            props.updatePScore(props.pScore + 1);
        }
    }

    function actualChoice(choice: number) {
        if (choice === 1) {
            return "Rock";
        }
        else if (choice === 2) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }

    function cImgChoice(choice: number) {
        if (choice === 1) {
            return <img id="rock" src="../therock.png" alt="Rock"></img>;
        }
        else if (choice === 2) {
            return <img id="paper" src="../paper.png" alt="Paper"></img>;
        }
        else if (choice == 3) {
            return <img id="scissors" src="../Scissors.png" alt="Scissor"></img>;
        }
        else {
            return <></>;
        }
    }

    return (
        <div className="center">
            <div className="playerBoard">
                <div className="whiteBoard">
                    <h2>Player</h2>
                    <div className="choices">
                        {/* <button onClick={() => playGame(1)}>
                            <img id="rock" src="../therock.png" alt="Rock"></img>
                        </button> */}
                        <img onClick={() => playGame(1)} id="rock" src="../therock.png" alt="Rock"></img>
                        <img onClick={() => playGame(2)} id="paper" src="../paper.png" alt="Paper"></img>
                        <img onClick={() => playGame(3)} id="scissors" src="../Scissors.png" alt="Scissor"></img>
                        {/* <button onClick={() => playGame(2)}>Paper</button> */}
                        {/* <button onClick={() => playGame(3)}>Scissors</button> */}
                    </div>
                    <h3>Your choice: {props.playerChoice > 0 ? actualChoice(props.playerChoice) : props.playerChoice}</h3>
                </div>
                <h2>{props.pScore}</h2>
            </div>
            <div className="win">
                {props.winText}
            </div>
            <div className="cpuBoard">
                <div className="whiteBoard">
                    <h2>Computer</h2>
                    {cImgChoice(props.cpuChoice)}
                    <h3>PC selected: {props.cpuChoice > 0 ? actualChoice(props.cpuChoice) : props.cpuChoice}</h3>
                </div>
                <h2>{props.cScore}</h2>
            </div>
        </div>
    )
}
