import React from 'react';
import LeaderList from './LeaderList';

function LeaderLists(props) {
  let allList = Object.entries(props.highScoreLists)
                      // .sort()
                      .map(
    ([difficultyLevel, scores], i) => {
      let diffLevelCapitalized = difficultyLevel[0].toUpperCase() + difficultyLevel.slice(1);
      return (
        <li key={i} className={difficultyLevel === props.difficulty ? "current-leaderlist" : undefined}>
          <h4>{diffLevelCapitalized}:</h4>
          <LeaderList scores={scores} index={difficultyLevel === props.difficulty ? props.index : undefined}/>
        </li>
      );
  });
  return (
    <ul>
      <h3>Leaderboards:</h3>
      {allList}
    </ul>
  );
}
export default LeaderLists;
