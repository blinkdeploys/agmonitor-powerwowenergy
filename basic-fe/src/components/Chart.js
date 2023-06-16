import React, { useState, useEffect, useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Papa from 'papaparse'
import HChartBoost from 'highcharts/modules/boost'
import HChartStock from 'highcharts/modules/stock'


HChartBoost(Highcharts)
HChartStock(Highcharts)

const Chart = () => {
    const [highChartsOptions, setHighChartsOptions] = useState({});
    const chartRef = useRef(null)
    
    useEffect(() => {
        const fetchChartOptions = async () => {
            const response = await fetch('mock/pump_data.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csvData = decoder.decode(result.value);
            const { data } = Papa.parse(csvData, { header: true });
            const chartCategories = data.map(entry => entry.timestamp);
            const chartData = data.map(entry => Number(entry.amount));
            const chartOptions = {
                chart: {
                  zoomType: 'x',
                  panning: true,
                  panKey: 'shift',
                },
                title: {
                  text: 'Electric Meter Power Data',
                },
                yAxis: {
                    min: 0,
                },
                xAxis: {
                  categories: chartCategories,
                },
                series: [
                  {
                    name: 'Amount',
                    data: chartData,
                  },
                ],
              };
              setHighChartsOptions(chartOptions);
        }
        fetchChartOptions()
    }, []);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={highChartsOptions}
            ref={chartRef}
            />
    )
}

export default Chart;
