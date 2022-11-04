import React from 'react';
import './quizPage.scss';

const QuizPage = ({ questions, onClickQuestion }) => {
  return (
    <div >1</div>


    //     {/* {questions.map((item) => {
    //       const questionList = [...item.incorrect_answers, item.correct_answer].sort();

    //       return (
    //         <div key={item.question} className="question_item">
    //           <h2>{item.question}</h2>
    //           <ul>
    //             {questionList.map((elem, index) => (
    //               <li onClick={() => onClickQuestion(index)} key={elem}>
    //                 {elem}
    //               </li>
    //             ))}
    //           </ul>
    //           <hr />
    //         </div>
    //       );
    //     })} */}
    //   </div>

    //   <button className="btn_check">Check answers</button>
    // </div>
  );
};

export default QuizPage;
