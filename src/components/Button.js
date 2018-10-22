import React from 'react';

function Button(props) {
  if (props.resetBtn) {
    return <button onClick={props.handleReset}>Reset</button>;
  } else {
    let btnText;
    switch (props.gameStage) {
      case "paused":
        btnText = "Resume Game"
        break;
      case "started":
      case "active":
        btnText = "Pause Game"
        break;
      case "finished":
        btnText = "Play Again"
        break;
      default:
        btnText = "Start Game"
    }
    return <button onClick={props.handleClick}>{btnText}</button>;
  }
}
export default Button;
