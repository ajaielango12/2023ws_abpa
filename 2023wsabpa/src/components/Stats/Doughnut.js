import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['USA','EU','Bangladesh','China','Pakistan','UAE','Vietnam','Sri Lanka','Brazil','South Korea','Rest of World'],
  datasets: [
    {
      label: 'Market Share In $ USD MN',
      data: [3881,3318,2268,1281,687,604,554,518 ,411 ,339,8655],
 
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)' ],
      borderWidth: 3,
    },
  ],
};

const Ring = () => {
  return <Doughnut data={data} />;
};

export default Ring;
