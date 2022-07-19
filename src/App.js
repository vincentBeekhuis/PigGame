import React, { useState } from 'react';

import './App.css';
import GameControls from './GameControls';
import Player from './Player';
import Winner from './Winner';

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerOne, setPlayerOne] = useState({
    playerNumber: 1,
    playerScore: 0,
    playerTotalScore: 0,
  });
  const [playerTwo, setPlayerTwo] = useState({
    playerNumber: 2,
    playerScore: 0,
    playerTotalScore: 0,
  });

  const resetGame = () => {
    setPlayerOne({
      playerNumber: 1,
      playerScore: 0,
      playerTotalScore: 0,
    });
    setPlayerTwo({
      playerNumber: 2,
      playerScore: 0,
      playerTotalScore: 0,
    });
    setActivePlayer(1);
    setWinner(null);
    setGameStarted(false);
  };
  const toggleActivePlayer = (e) => {
    setActivePlayer((prevState) => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 1;
    });
  };

  const resetPlayerScores = (e) => {
    setPlayerOne((prevState) => {
      return { ...prevState, playerScore: 0 };
    });
    setPlayerTwo((prevState) => {
      return { ...prevState, playerScore: 0 };
    });
  };

  const updatePlayerScore = (score) => {
    if (+activePlayer === 1) {
      setPlayerOne((prevState) => {
        if (prevState.playerTotalScore + prevState.playerScore + score > 20) {
          setWinner(1);
        }
        return {
          ...prevState,
          playerScore: prevState.playerScore + score,
        };
      });
    }
    if (+activePlayer === 2) {
      setPlayerTwo((prevState) => {
        if (prevState.playerTotalScore + prevState.playerScore + score > 20) {
          setWinner(2);
        }
        return {
          ...prevState,
          playerScore: prevState.playerScore + score,
        };
      });
    }
  };

  const bankCurrentScore = (score) => {
    if (+activePlayer === 1) {
      setPlayerOne((prevState) => {
        if (+prevState.playerTotalScore + prevState.playerScore > 20) {
          setWinner(1);
        }

        return {
          ...prevState,
          playerTotalScore: prevState.playerTotalScore + prevState.playerScore,
        };
      });
    }
    if (+activePlayer === 2) {
      setPlayerTwo((prevState) => {
        if (+prevState.playerTotalScore + prevState.playerScore > 20) {
          setWinner(2);
        }
        return {
          ...prevState,
          playerTotalScore: prevState.playerTotalScore + prevState.playerScore,
        };
      });
    }
  };
  return (
    <>
      <div className='container'>
        <Player
          playerNumber={playerOne.playerNumber}
          playerScore={playerOne.playerScore}
          playerTotalScore={playerOne.playerTotalScore}
          className={+activePlayer === 1 ? 'active' : ''}
        />
        <GameControls
          updatePlayerScore={updatePlayerScore}
          bankCurrentScore={bankCurrentScore}
          resetPlayerScores={resetPlayerScores}
          toggleActivePlayer={toggleActivePlayer}
          gameStarted={gameStarted}
          onStartGame={setGameStarted}
        />

        <Player
          playerNumber={playerTwo.playerNumber}
          playerScore={playerTwo.playerScore}
          playerTotalScore={playerTwo.playerTotalScore}
          className={+activePlayer === 2 ? 'active' : ''}
        />
      </div>
      {winner && <Winner winner={winner} onReset={resetGame} />}
    </>
  );
}

export default App;
