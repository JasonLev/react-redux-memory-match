import React from 'react';

function Square(props) {
  let cardClass = "card"
  if (props.flip) {
    cardClass += " flipped"
  }
  return (
    <div className="square" onClick={props.handleClick}>
      <div className={cardClass}>
        <div className="front">
          <span>?</span>
        </div>
        <div className="back">
          <img src={props.img} alt="playing card" />
        </div>
      </div>
    </div>
  );
}
export default Square;
