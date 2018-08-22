import React, { Component } from 'react';

function Button(props) {
  return <button onClick={props.handleClick}>Start Game</button>
}

export default Button;
