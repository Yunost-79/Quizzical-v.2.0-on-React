import React, { PureComponent, useEffect, useState } from 'react';
import StartPage from './components/StartPage/startPage';
import QuizPage from './components/QuizPage/quizPage';
import './style/App.scss';

function App() {
  const [pageStart, setPageStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
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
      <div className="wrapper">
        {pageStart ? <QuizPage questions={questions} setQuestions={setQuestions} /> : <StartPage openPageStart={openPageStart} />}
      </div>
    </div>
  );
}

export default App;
