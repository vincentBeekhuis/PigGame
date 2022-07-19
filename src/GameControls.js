import React, { useRef } from 'react';
import dice1 from './assets/Dice-1-b.svg';
import dice2 from './assets/Dice-2-b.svg';
import dice3 from './assets/Dice-3-b.svg';
import dice4 from './assets/Dice-4-b.svg';
import dice5 from './assets/Dice-5-b.svg';
import dice6 from './assets/Dice-6-b.svg';

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

const GameControls = (props) => {
  // Refs
  const imgRef = useRef();

  const rollDice = (e) => {
    props.onStartGame(true);
    const diceRoll = Number(Math.ceil(Math.random() * 6));
    imgRef.current.src = dices[diceRoll - 1];

    if (diceRoll === 1) {
      props.resetPlayerScores();
      props.toggleActivePlayer();
      return;
    }

    props.updatePlayerScore(diceRoll);
  };

  const bankScore = (e) => {
    props.bankCurrentScore();
    props.resetPlayerScores();
    props.toggleActivePlayer();
  };
  return (
    <div className='flex-container__vertical'>
      <button onClick={rollDice}>ROLL DICE</button>
      <div className='dice-container'>
        <img
          src=''
          className={`dice ${!props.gameStarted ? 'hidden' : ''}`}
          ref={imgRef}
          alt='dice'
        />
      </div>
      <button onClick={bankScore}>BANK SCORE</button>
    </div>
  );
};
export default GameControls;
