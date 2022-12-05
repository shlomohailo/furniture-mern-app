import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ item }) {
  const data = {
    labels: [...item.map((item) => item.productName)],
    datasets: [
      {
        label: "# of Votes",
        data: [...item.map((item) => item.orders)],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(116, 203, 243)",
          "rgb(220, 116, 243)",
          "rgb(243, 116, 139)",
          " rgb(116, 243, 190)",
          " rgb(196, 243, 116)",
          
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgb(116, 203, 243)",
          "rgb(220, 116, 243)",
          "rgb(243, 116, 139)",
          " rgb(116, 243, 190)",
          " rgb(196, 243, 116)",
          
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
