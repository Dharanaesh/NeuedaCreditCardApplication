import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import './TransactionState.css';

function ProfessionDashboard() {
    const [salesData, setSalesData] = useState([]);
    const myChartRef = useRef(null); // Create a useRef for myChart

    useEffect(() => {
        getCountrySales();
    }, []);

    useEffect(() => {
        if (salesData.length > 0) {
            if (myChartRef.current) {
                myChartRef.current.destroy();
            }

            const labels = salesData.map(itemData => itemData.profession);
            const values = salesData.map(itemData => itemData.sales);

            myChartRef.current = new Chart(document.getElementById("ordersChart"), {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Sales",
                        data: values,
                        borderColor: '#36A2EB',
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#4BC0C0',
                            '#9966FF',
                            '#FF9900',
                            '#FF5733',
                            '#33FF99',
                            '#FF33CC',
                        ]
                    }]
                },
                options: {
                    indexAxis:'y',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Profeesion Sales'
                        }
                    }
                }
            });
        }
    }, [salesData]);

    const getCountrySales = () => {
        const url = "http://localhost:8080/transactions/professiontransactions";

        fetch(url)
            .then(response => response.json())
            .then(items => {
                setSalesData(items);
            });
    }

    return (
        <div className="container">
            <h2 className="page-title" style={{ color: 'darkgreen',padding:"30px",marginTop:"10px"}}>Transaction Summary by Profession</h2>
            <table className="data-table">
            
                <thead>
                    <tr>
                        <th>Profession</th>
                        <th>Total Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map(itemData => (
                        <tr key={itemData.profession}>
                            <td>{itemData.profession}</td>
                            <td>{"$ "+itemData.sales.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="chart-container">
                <canvas id="ordersChart"></canvas>
            </div>
        </div>
    );
}

export default ProfessionDashboard;
