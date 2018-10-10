import React from 'react';

function Button(props) {
  if (props.reset) {
    return <button onClick={props.handleReset}>Reset</button>;
  } else {
    return <button onClick={props.handleClick}>{props.gameActive ? "Pause Game" : "Start Game"}</button>
  }
}
export default Button;
