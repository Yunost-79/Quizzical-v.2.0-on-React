import React from 'react';

import './Menu.scss'

function Menu(props) {
  return (
    <div className="menu">
      <h1>Ouizzical</h1>
      <span className="page-description">Description</span>
      <button className="start-button" onClick={() => props.start()}>
        Start quiz
      </button>
    </div>
  );
}

export default Menu;
