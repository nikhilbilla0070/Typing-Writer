import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
  } from "chart.js";
  import React from "react";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  
  const Graph = ({graphData}) => {
    return (
      <>
        <Line data={
          {
            labels: graphData.map(i=>{return i[0]+1}),
            datasets: [
              {
                data: graphData.map(i=>i[1]),
                label: 'wpm',
                borderColor: 'gold'
              }
            ]
          }
        } />
      </>
    );
  };
  
  export default Graph;