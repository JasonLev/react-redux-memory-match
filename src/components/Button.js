import React, { Component } from 'react';

function Button(props) {
  return <button onClick={props.handleClick}>{props.gameActive ? "Pause Game" : "Start Game"}</button>
}
export default Button;
