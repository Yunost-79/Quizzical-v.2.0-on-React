import React, { useState, useEffect } from 'react';

import './App.scss';
import Menu from './components/Menu';
import Question from './components/Question';
import Blobs from './components/Blobs';

import { nanoid } from 'nanoid';
import StartContainer from './components/StartContainer';

function App() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [checked, setChecked] = useState(false);
  const [questions, setQuestions] = useState([]);

  const shuffleArr = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch('https://opentdb.com/api.php?amount=5');
      const data = await res.json();
      let question = [];

      data.results.forEach((elem, index) => {
        question.push({
          num: index + 1,
          id: nanoid(),
          answers: shuffleArr([...elem.incorrect_answers, elem.correct_answer]),
          question: elem.question,
          correct: elem.correct_answer,
          selected: null,
          checked: false,
        });
      });
      setQuestions(question);
    }
    getQuestions();
  }, [count]);


  const handleCheck = () => {
    let selected = true;
    questions.forEach((question) => {
      if (question.selected === null) {
        selected = false;
        return;
      }
    });
    if (!selected) {
      return;
    }
    setQuestions((questions) =>
      questions.map((question) => {
        return { ...question, checked: true };
      })
    );
    setChecked(true);

    let correct = 0;
    questions.forEach((question) => {
      if (question.correct === question.selected) {
        correct += 1;
      }
    });
    setCorrect(correct);
  };

  const handleClickAnswer = (id, answer) => {
    setQuestions((questions) =>
      questions.map((question) => {
        return question.id == id ? { ...question, selected: answer } : question;
      })
    );
  };

  const handlePlayAgaine = () => {
    setCount((count) => count + 1);
    setChecked(false);
  };

  const questionElement = questions
    ? questions.map((question) => {
        return <Question key={question.id} question={question} id={question.id} handleClickAnswer={handleClickAnswer} />;
      })
    : [];

  const start = () => {
    setStarted((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className="main-contaniner">
        {started ? (
          <StartContainer
            questionElement={questionElement}
            checked={checked}
            correct={correct}
            handlePlayAgaine={handlePlayAgaine}
            handleCheck={handleCheck}
          />
        ) : (
          <Menu start={start} />
        )}

        <Blobs />
      </div>
    </div>
  );
}

export default App;
