import React from 'react';
import './startPage.scss';


const StartPage = ({ openPageStart }) => {
  return (
    <>
      <div className="start_content">
        <div className="content_title">
          <h1>Quizzical</h1>
          <button onClick={openPageStart} className="start_btn">
            Start quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default StartPage;
