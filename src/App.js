import React, { PureComponent, useEffect, useState } from 'react';
import StartPage from './components/StartPage/startPage';
import QuizPage from './components/QuizPage/quizPage';
import './style/App.scss';

function App() {
  const [pageStart, setPageStart] = useState(false);
  const [checked, setChecked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
      .then((res) => res.json())
      .then((json) => {
        const data = json.results;
        // console.log(questions);

        let questinFetch = [];
        data.forEach((elem) => {
          questinFetch.push({
            id: elem.correct_answer,
            answer: [...elem.incorrect_answers, elem.correct_answer].sort(),
            question: elem.question,
            correct: elem.correct_answer,
            selected: null,
            checked: false,
          });
        });

        setQuestions(questinFetch);
      })
      .catch((err) => {
        console.warn(err);
        alert('Error 404');
      });
  }, []);

  // console.log(questions);

  // const openPageStart = () => {
  //   setPageStart(true);
  // };

  const handleCheck = () => {
    let selected = true;
    questions.map((item) => {
      if (item.selected === null) {
        selected = false;
        return;
      }
    });

    if (!selected) {
      return;
    }
    setQuestions((questions) =>
      questions.map((item) => {
        return { ...item, checked: true };
      })
    );
    setChecked(true);
    let correct = 0;
    questions.map((item) => {
      if (item.correct === item.selected) {
        correct += 1;
      }
    });
    setCorrect(correct);
  };

  // const handleClickAnswer = () => {
  //   setQuestions((items) =>
  //     items.map((elem) => {
  //       return elem.id === id ? { ...questions, selected: answer } : elem;
  //     })
  //   );
  // };

  const handlePlayAgain = () => {
    setCount((count) => count + 1);
    setChecked(false);
  };

  // const onClickQuestion = (index) => {
  //   // questionsList.forEach((elem) =>{
  //   //   console.log(elem);
  //   // })
  //   // console.log(questions, index);
  //   // console.log(questions.correct_answer, index);
  // };c

  return (
    <div className="App">
      <div className="wrapper">
        <div className="quiz_content">
          <div className="questions_block">
            {questions.map((item) => {
              const answersList = questions.answer;
              console.log(answersList);
              return (
                <div key={item.id} className="question_item">
                  <h2>{item.question}</h2>
                  <ul>
                    {item.answer.map((elem) => {
                      <li key={elem}>{elem}</li>;
                    })}
                  </ul>
                  <hr />
                </div>
              );
            })}
          </div>

          <button className="btn_check">Check answers</button>
        </div>
        {/* <QuizPage questions={questions} /> */}
        {/* {pageStart ? <QuizPage questions={questions} setQuestions={setQuestions} /> : <StartPage openPageStart={openPageStart} />} */}
      </div>
    </div>
  );
}

export default App;
