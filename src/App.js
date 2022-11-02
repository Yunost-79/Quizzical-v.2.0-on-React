import React, { PureComponent } from 'react';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <>
        <div className="start_content">
          <img src="/image/intro-page.png" alt="intro-page" />
          <div className="content_title">
            <h1>Quizzical</h1>
            <button className="start_btn">Start quiz</button>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
