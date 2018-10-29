import React from 'react';

function DifficultySelector(props) {
  return (
    <div className="difficulty-row">
      <label htmlFor="difficulty-select">Difficulty Level:</label>
      <select id="difficulty-select" onChange={props.handleDifficulty} value={props.difficulty}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
export default DifficultySelector;
