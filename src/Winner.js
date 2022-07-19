import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className='backdrop' />;
};

const Modal = (props) => {
  return (
    <div className='modal'>
      <h1>{`Player ${props.winner} wins!!`}</h1>
      <span>
        <button onClick={props.onReset}>Play again!</button>
      </span>
    </div>
  );
};

const Winner = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal winner={props.winner} onReset={props.onReset} />,
        document.getElementById('modal-root')
      )}
    </div>
  );
};
export default Winner;
