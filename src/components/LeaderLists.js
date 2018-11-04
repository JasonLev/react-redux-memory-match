import React from 'react';
import LeaderList from './LeaderList';
import {capitalize} from '../constants/helpers';

function LeaderLists(props) {
  let allList = Object.entries(props.highScoreLists).map(
    ([difficultyLevel, scores], i) => {
      return (
        <li key={i} className={difficultyLevel === props.difficulty ? "current-leaderlist" : undefined}>
          <h4>{capitalize(difficultyLevel)}:</h4>
          <LeaderList scores={scores} index={difficultyLevel === props.currentList && props.index}/>
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
