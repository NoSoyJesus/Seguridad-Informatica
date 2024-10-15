const phishingData = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Casos de Phishing',
        data: [720000, 770000, 3930000, 7820000, 10200000, 8950000, 8900000],
        backgroundColor: 'rgba(255, 99, 132, 0.8)', 
        borderColor: 'black', 
        borderWidth: 1.6
    }]
};


const phishingConfig = {
    type: 'bar', 
    data: phishingData,
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
};

const phishingChart = new Chart(
    document.getElementById('phishingChart'),
    phishingConfig
);

const phishingChartLatam = {
    labels: ['Brasil', 'México', 'Perú','Colombia', 'Ecuador', 'Chile', 'Argentina'],
    datasets: [{
        label: 'Casos de Phishing',
        data: [134000000, 43000000, 31500000, 30900000, 12200000, 10500000, 9400000],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'black', 
        borderWidth: 1.6
    }]
};

const phishingLatamConfig = {
    type: 'bar',
    data: phishingChartLatam,
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
};

const phishingLatamChart = new Chart(
    document.getElementById('phishingChartLatam'),
    phishingLatamConfig
);

const malwareData = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Casos de Ransomware',
        data: [183600000, 206400000, 187910000, 304640000, 623250000, 493330000, 317590000], 
        backgroundColor: 'rgba(54, 162, 235, 0.8)', 
        borderColor: 'black', 
        borderWidth: 1.6
    }]
};

const malwareConfig = {
    type: 'bar',
    data: malwareData,
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
};

const malwareChart = new Chart(
    document.getElementById('malwareChart'),
    malwareConfig
);

const ransomwarePie = new Chart(document.getElementById('ransomwareMethods'), {
    type: 'pie',
    data: {
        labels: ['Phishing', 'RDP (Protocolo de Escritorio Remoto)', 'Explotación de Vulnerabilidades', 'Otros Métodos'],
        datasets: [{
            label: 'Métodos de infección por ransomware',
            data: [26, 47, 10, 17],  
            backgroundColor: [
                'rgba(153, 102, 255, 0.6)',  
                'rgba(255, 159, 64, 0.6)',   
                'rgba(255, 205, 86, 0.6)',  
                'rgba(75, 192, 192, 0.6)'    
            ],
            borderColor: [
                'black',    
                'black',   
                'black',   
                'black'  
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = (value / total * 100).toFixed(2) + "%";
                    return percentage;  
                },
                color: 'black',  
                font: {
                    weight: 'bold'
                }
            }
        }
    },
    plugins: [ChartDataLabels]  
});

const wannaCryData = {
    labels: ['Reino Unido', 'Rusia', 'China', 'Estados Unidos', 'Alemania'],
    datasets: [{
        label: 'Perdidas en dolares $',
        data: [124000000, , 820000000, 1300000000, ], 
        backgroundColor: 'rgba(255, 159, 64, 0.8)',  
        borderColor: 'black',  
        borderWidth: 1.6
    }]
};

const wannaCryConfig = {
    type: 'bar',  
    data: wannaCryData,
    options: {
        scales: {
            y: {
                beginAtZero: true  
            }
        }
    }
};

const wannaCryChart = new Chart(
    document.getElementById('wannaCryChart'),
    wannaCryConfig
);






