import React, { useState, useEffect } from 'react'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJs.register(
    Tooltip,
    Legend,
    ArcElement
);

const PieChart = () => {

    const [chart, setchart] = useState({});

    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

    const optionsapi = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1fc5a36da5mshebbf0833b1a3b21p12c8f6jsnbcbd443ff5e7',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url, optionsapi).then((res) => res.json()).then((json) => { setchart(json.data);}).catch(err => console.error('error:' + err))
    }, [url]);

    let data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x=> x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    let options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <div>
            <Pie
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default PieChart