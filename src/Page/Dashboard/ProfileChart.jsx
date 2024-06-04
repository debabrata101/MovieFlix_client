import { Bar } from "react-chartjs-2";

const ProfileChart = () => {
  const data = {
    labels: ["Series", "Movies", "Watch Time"],
    datasets: [
      {
        label: "Count",
        data: [20, 30, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="text-center">
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default ProfileChart;