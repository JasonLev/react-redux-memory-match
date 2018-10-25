import React from 'react';

function LeaderList(props) {
  let leaderList = props.highScores.map(
    (score, i) => {
      return (<li key={i} className={i === props.index && "leader-highlight"}>
                <span className="leader-span">{i + 1}.</span>
                <span className="leader-name leader-span">{score.name}</span>
                <span className="leader-score leader-span">{score.score}</span>
              </li>);
    }
  );
  return (
    <ul className="leaderlist">
      <h3>Leaderboard:</h3>
      {leaderList}
    </ul>
  );
}
export default LeaderList;
