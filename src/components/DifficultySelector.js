import React from 'react';
import Difficulty from '../constants/enum-difficulty';
import {capitalize} from '../constants/helpers';

function DifficultySelector(props) {
  const options = Object.keys(Difficulty)
                        .map((level, i) => {
                          return (
                            <option value={level} key={i}>
                              {capitalize(level)}
                            </option>
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
