import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
  
    title: {
      display: true,
      text: 'EXIM Data',
    },
  },
};

const labels = ['2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Export of Textiles From India ',
      data: [35723, 36558, 33379, 29877, 42345],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    { 
      label: 'Import Of Textiles Into India ',
      data: [4666.69,7340.74,6928.34,4953.68,3938.72],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Barchart = () => {
  return <Bar options={options} data={data} />;
};

export default Barchart ;


