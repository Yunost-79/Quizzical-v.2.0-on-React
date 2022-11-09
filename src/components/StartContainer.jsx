import React from 'react';

import './StartContainer.scss';

const StartContainer = ({ questionElement, checked, correct, handlePlayAgaine, handleCheck }) => {
  return (
    <div className="start-content-conteiner">
      {questionElement}
      <div className="end-div">
        {checked && <span className="score">You scored {correct}/5 answers</span>}
        <button className="check" onClick={checked ? handlePlayAgaine : handleCheck}>
          {checked ? 'Play Againe' : 'Check Answer'}
        </button>
      </div>
    </div>
  );
};

export default StartContainer;
