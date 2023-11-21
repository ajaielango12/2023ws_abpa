import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Top 5 Countries of Import Into India',
    },
  },
};

const labels = ['2017', '2018', '2019', '2020', '2021'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Mongolia',
      data: ['62.60',	'86.20','58.59','64.99','31.16'],
      borderColor: 'rgb(255, 128, 0)',
      backgroundColor: 'rgba(255, 128, 0, 0.8)',
    },
    {
      label: 'Bangladesh' ,
      data: ['56.94',	'59.98','58.87','57.53','47.14'],
      borderColor: 'rgba(22, 84, 3, 0.8)',
      backgroundColor: 'rgba(22, 84, 3, 0.8)',
    },
    
    {
      label: 'Mali' ,
      data: ['53.82',	'59.55','63.56','35.56','16.35'],
      borderColor: 'rgb(124, 255,1)',
      backgroundColor: 'rgba(124, 255, 1, 0.8)',
    },
    {
      label: 'Cambodia' ,
      data: ['33.45', '36.62',	'51.18','42.89','21.32'],
      borderColor: 'rgba(169, 80, 255, 0.8)',
      backgroundColor: 'rgba(169, 80, 255, 0.8)',
    },
    {
      label: 'Turkmenistan' ,
      data: ['32.02','10.85','11.59','0.77'],
      borderColor: 'rgba(255, 0, 0, 1)',
      backgroundColor: 'rgba(255, 0, 0, 1)',
    },
  ],
};

const ImportFC = () => {
  return <Line options={options} data={data} />;
};

export default ImportFC;