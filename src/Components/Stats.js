import React from "react";
import Graph from "./Graph";

const Stats = ({
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  missedChars,
  extraChars,
  graphData,
  resetTest
}) => {
  // arr = [1,1,2,3,4,5,6,6,6,6] = set(arr) => [1,2,3,4,5,6]

  var timeSet = new Set();

  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });

  console.log(graphData,newGraph);

  return (
    <div className="stats-box">
      <div className="left">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title">Accuracy</div>
        <div className="subtitle">{accuracy}</div>
        <div className="title">Characters</div>
        <div className="subtitle">
          {correctChars}/{incorrectChars}/{missedChars}/{extraChars}
        </div>
        <div onClick={resetTest} className="restart">Restart</div>
      </div>
      <div className="right">
        {/* graph will come here */}
        <Graph graphData={newGraph} />
      </div>
    </div>
  );
};

export default Stats;