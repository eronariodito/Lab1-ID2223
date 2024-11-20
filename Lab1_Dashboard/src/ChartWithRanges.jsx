import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

const ChartWithRanges = () => {
  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 15, 25, 30, 35],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        min: 0,
        max: 40, // Adjust based on your ranges
      },
    },
  };

  // Custom plugin for vertical background
  const verticalBackgroundPlugin = {
    id: "vertical-background",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const yAxis = chart.scales.y;

      // Define colors and ranges
      const colors = ["lightblue", "lightgreen", "lightcoral"];
      const ranges = [0, 15, 30, 40]; // Specify Y-axis values for transitions

      // Draw vertical background sections
      ctx.save();
      for (let i = 0; i < ranges.length - 1; i++) {
        const yStart = yAxis.getPixelForValue(ranges[i + 1]); // Top of the range
        const yEnd = yAxis.getPixelForValue(ranges[i]); // Bottom of the range

        ctx.fillStyle = colors[i];
        ctx.fillRect(
          chartArea.left,
          yStart,
          chartArea.right - chartArea.left,
          yEnd - yStart
        );
      }
      ctx.restore();
    },
  };

  return (
    <Line data={data} options={options} plugins={[verticalBackgroundPlugin]} />
  );
};

export default ChartWithRanges;
