import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { makeDate } from "../utils"


const useFetchPumpData = (file) => {
    const [chartOptions, setChartOptions] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const init = async () => {
        setIsLoading(true)
        if (file) {
            const csvEndpoint = `${API_URL}${file}`
            // fetch serialized csv data from endpoint
            const response = await fetch(csvEndpoint);
            if (!response.ok) {
                throw new Error('There was an error fetching pump data.')
            }
            // parse response body
            const result = await response.json();
            const data  = await JSON.parse(result)
            // generate chart labels and data points
            const chartCategories = data.map(entry => makeDate(entry.timestamp));
            const chartData = data.map(entry => Number(entry.amount));
            // plug labels and data into highcharts options
            let chartOpt = {
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
                        name: 'Amount (kWh)',
                        data: chartData,
                    },
                ],
            };
            // set the options and loading states
            setChartOptions(chartOpt);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        init()
    }, [file]);

    return { chartOptions, isLoading };
}

export default useFetchPumpData;
