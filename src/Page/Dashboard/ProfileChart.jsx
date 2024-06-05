import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfileChart = () => {
  const data = {
    labels: ["Series", "Movies", "Watch Time"],
    datasets: [
      {
        data: [300, 50, 100], // Sample data values
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
      },
    ],
  };
  

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="text-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProfileChart;