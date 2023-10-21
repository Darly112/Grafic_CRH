import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var Modelo = ["Orbea Oiz", "Orbea Alma", "specialized Epic", "Scott Scale", "Scott Spark", "Orbea Orca", "Merida Reacto", "Giant TCR", "Specialized Tarmac", "Orbea Avant", "S-WORKS", "Cervelo TL"];

var midata = {
    labels: Modelo,
    datasets: [
        {
            label: 'Prime',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 0, 0)', 
            backgroundColor: 'rgba(255, 0, 0, 0.5)', 
            pointRadius: 6, 
            pointBorderColor: 'rgba(255, 0, 0, 0.8)', 
            pointBackgroundColor: 'rgba(255, 0, 0, 0.8)', 
            
        },
        {
            label: "No Prime",
            data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
            tension: 0.5,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            pointRadius: 6,
            pointBorderColor: "rgba(75, 192, 192, 0.8)",
            pointBackgroundColor: "rgba(75, 192, 192, 0.8)",
          },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 117, 0)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}