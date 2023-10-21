import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Shimano', 'SRAM', 'Campagnolo', 'Fox', 'Otros'],
    datasets: [
        {
            label: 'Popularidad',
            data: [35, 25, 20, 30, 10],
            backgroundColor: [
                'rgba(255, 69, 0, 0.2)',   
                'rgba(255, 165, 0, 0.2)',  
                'rgba(0, 128, 255, 0.2)', 
                'rgba(0, 255, 128, 0.2)',  
                'rgba(255, 0, 255, 0.2)',  
            ],
            borderColor: [
                'rgba(255, 69, 0, 1)',    
                'rgba(255, 165, 0, 1)',   
                'rgba(0, 128, 255, 1)',  
                'rgba(0, 255, 128, 1)',  
                'rgba(255, 0, 255, 1)',   
            ],
            borderWidth: 2,
            
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}
