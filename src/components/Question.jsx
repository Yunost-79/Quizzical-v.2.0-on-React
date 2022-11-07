import React from 'react';

import './Question.scss'

import { nanoid } from 'nanoid';

const Question = (props) => {
  let answers = props.question.answers;

  const handleClick = (answer) => {
    if (props.question.checked) {
      return;
    }
    props.handleClickAnswer(props.id, answer);
  };

  const answersElement = answers.map((answer) => {
    let id = null;
    if (props.question.checked) {
      if (props.question.correct == answer) {
        id = 'correct';
      } else if (props.question.selected === answer) {
        id = 'incorrect';
      } else {
        id = 'not-selected';
      }
    }
    return (
      <button key={nanoid()} id={id} className={answer === props.question.selected ? 'answer selected' : 'answer'} onClick={()=> handleClick(answer)}>
        {answer}
      </button>
    );
  });

  return (
    <div className="question-block">
      <h3 className="question-title">{props.question.question}</h3>
      <div className="question-answers">{answersElement}</div>
      <div className="line"></div>
    </div>
  );
};

export default Question;
