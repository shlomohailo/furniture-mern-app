import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";

function ChatsSales({item}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  );

  const data = {
    labels: [...item.map((item)=>item.saleName)],
    datasets: [
      {
        label: "sales by product",
        data: [400, 300, 350, 200, 280,400, 300, 350, 200, 280],
        borderColor: "black",
        backgroundColor: "white",
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
}

export default ChatsSales;
