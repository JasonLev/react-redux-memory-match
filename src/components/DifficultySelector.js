import React from 'react';
import Difficulty from '../enums';

function DifficultySelector(props) {
  const options = Object.entries(Difficulty)
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
