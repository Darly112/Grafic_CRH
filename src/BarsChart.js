import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, 20, 25, 30, 17, 60];
var Marca = ["Orbea", "Giant", "Specialized", "Scott", "Trek", "BH", "Merida", "Cannondale", "Canyon", "Cube", "Norco", "Santa Cruz"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 5,
            max : 100
        },
        x: {
            ticks: { color: 'rgba(255, 20, 190)'}
        }
    }
};

var midata = {
    labels: Marca,
    datasets: [
        {
            label: 'Popularidad',
            data: beneficios,
            backgroundColor: 'rgba(1, 200, 255, 100)' 

        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}
