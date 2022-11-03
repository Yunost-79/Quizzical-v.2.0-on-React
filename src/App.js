import React, { PureComponent, useEffect, useState } from 'react';
import StartPage from './components/StartPage/startPage';
import QuizPage from './components/QuizPage/quizPage';
import './style/App.scss';

function App() {
  const [pageStart, setPageStart] = useState(false);
  const [questions, setQuestions] = useState([]);

  // const getQuestions = () => {
  //   const [questions, setQuestions] = useState([]);

  //   useEffect(() => {
  //     async function fetchQuestions() {
  //       const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy');
  //       response = await response.json();
  //       setQuestions(response);
  //     }
  //     fetchQuestions();
  //   }, []);
  //   return console.log(JSON.stringify(questions));
  // };

  // getQuestions();

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy')
      .then((res) => res.json())
      .then((json) => {
        setQuestions(json.results);
      })
      .catch((err) => {
        console.warn(err);
        alert('Error 404');
      });
  }, []);






  const openPageStart = () => {
    setPageStart(true);
  };

  return (
    <div className="App">

      {pageStart ? <QuizPage questions={questions} setQuestions={setQuestions} /> : <StartPage openPageStart={openPageStart} />}
    </div>
  );
}

export default App;
