import React from 'react';

function LeaderList(props) {
  let leaderList = props.scores.map(
    (score, i) => {
      let seconds = score.score % 60;
      return (<li key={i} className={i === props.index ? "leader-highlight" : undefined}>
                <span className="leader-span">{i + 1}.</span>
                <span className="leader-name leader-span">{score.name}</span>
                <span className="leader-score leader-span">{Math.floor(score.score/60)}:{seconds < 10 ? "0" + seconds : seconds}</span>
              </li>);
    }
  );
  return (
    <ul className="leaderlist">
      {leaderList}
    </ul>
  );
}
export default LeaderList;
