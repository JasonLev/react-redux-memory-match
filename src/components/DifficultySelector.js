import React from 'react';

function DifficultySelector(props) {
  const difficulty = {
    easy: "Easy",
    medium: "Medium",
    hard:  "Hard"
  }
  const options = Object.entries(difficulty)
                        .map(([k,v], i) => {
                          return (
                            <option value={k} key={i}>{v}</option>
                          )
                        });
  return (
    <div className="difficulty-row">
      <label htmlFor="difficulty-select">Difficulty Level:</label>
      <select id="difficulty-select" onChange={props.handleDifficulty} value={props.difficulty}>
        {options}
      </select>
    </div>
  );
}
export default DifficultySelector;
