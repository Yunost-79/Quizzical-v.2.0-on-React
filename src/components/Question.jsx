import React from 'react';

import './Question.scss';

import { nanoid } from 'nanoid';

const Question = ({ id, question, handleClickAnswer }) => {
  let answers = question.answers;

  const handleClick = (answer) => {
    if (question.checked) {
      return;
    }
    handleClickAnswer(id, answer);
  };

  const answersElement = answers.map((answer) => {
    let id = null;
    if (question.checked) {
      if (question.correct == answer) {
        id = 'correct';
      } else if (question.selected === answer) {
        id = 'incorrect';
      } else {
        id = 'not-selected';
      }
    }
    return (
      <button key={nanoid()} id={id} className={answer === question.selected ? 'answer selected' : 'answer'} onClick={() => handleClick(answer)}>
        {answer}
      </button>
    );
  });

  return (
    <div className="question-block">
      <h3 className="question-title">{question.question}</h3>
      <div className="question-answers">{answersElement}</div>
      <div className="line"></div>
    </div>
  );
};

export default Question;
