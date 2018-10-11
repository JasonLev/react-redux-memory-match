import React from 'react';

function Button(props) {
  if (props.resetBtn) {
    return <button onClick={props.handleReset}>Reset</button>;
  } else {
    return (
      <button onClick={props.handleClick}>
        {props.gameActive && props.gameStarted ? "Pause Game"
          : props.gameStarted ? "Resume Game"
          : "Start Game"}
      </button>
    );
  }
}
export default Button;
