import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function AreaChart({item}) {
   
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "cities orders",
      },
    },
  };

  const labels = [
    ...item.map((item)=>item.citiesName)
 
  ];

  const data = {
    labels,
    datasets: [
  
      {
        fill: true,
        label: "cities orders",
        data: [...item.map((item)=>item.profit)],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        tension:0.4
      },
      
    ],
  };
  return <Line  options={options} data={data} />;
}
