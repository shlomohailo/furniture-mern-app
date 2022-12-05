import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalBarChart({ item }) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "orders sum",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

   const data = {
    labels,
    datasets: [
    
      {
        label: "months",
        data: item.map((item)=>item.sum),
        backgroundColor: " rgb(196, 243, 116)",
      },
    ],
  };
  return <Bar  options={options} data={data} />;
}
