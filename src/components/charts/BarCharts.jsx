import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      offset: true,
      grid: {
        display: false,
      },
    },
    y: {
      offset: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: false,
    title: {
      display: true,
    },
  },
};
const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderWidth: 1,
      borderRadius: 12,
      backgroundColor: "#fb6340",
      barPercentage: 0.4,
      categoryPercentage: 0.55,
    },
  ],
};

const BarCharts = () => {
  return <Bar options={options} data={data} />;
};

export default BarCharts;
