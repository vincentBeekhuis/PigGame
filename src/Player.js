const Player = (props) => {
  const { className, playerNumber } = props;

  return (
    <div className={`player ${className}`}>
      <h2 className='player-name'>PLAYER {playerNumber}</h2>
      <h2 className='total-score'>{props.playerScore}</h2>
      <div className='current-score'>
        <p>{props.playerTotalScore}</p>
      </div>
    </div>
  );
};

export default Player;
