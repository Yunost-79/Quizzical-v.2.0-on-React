import React from 'react';
import './quizPage.scss';

const QuizPage = ({ questions, setQuestions }) => {
  return (
    <div className="quiz_content">
      <div className="questions_block">
        {questions.map((item) => {
          const questionList = [...item.incorrect_answers, item.correct_answer].sort();

          return (
            <div key={item.question} className="question_item">
              <h2>{item.question}</h2>
              <ul>
                {questionList.map((elem) => (
                  <li key={elem}>{elem}</li>
                ))}
              </ul>
              <hr />
            </div>
          );
        })}
      </div>

      <button className="btn_check">Check answers</button>
    </div>
  );
};

export default QuizPage;
