import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep'],
    datasets: [

        {
            label: 'Inventario',
            data: [60, 80, 70, 100, 90, 120, 140, 130, 110, 160, 150, 170],
            backgroundColor: 'rgba(115, 129, 110, 1)',
        },
    ],
};

export default function Chart() {
    return <Bar data={data} />;
}
