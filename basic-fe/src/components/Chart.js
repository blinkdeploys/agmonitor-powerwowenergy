import React, { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HChartBoost from 'highcharts/modules/boost'
import HChartStock from 'highcharts/modules/stock'
import HChartAccessibility from 'highcharts/modules/accessibility'
import useFetchPumpData from '../hooks/useFetchPumpData'


// pan and zoom functionalities
HChartBoost(Highcharts)
HChartStock(Highcharts)
// accessibilty
HChartAccessibility(Highcharts)

const Chart = ({ chartFile }) => {
    const chartRef = useRef(null)
    let { chartOptions, isLoading } = useFetchPumpData(chartFile || '')

    return (
        <>
            {isLoading && <div align="center">Loading pump data...</div>}
            {!isLoading && !chartOptions && <div>No chart data available. Please select the a CSV file to load chart.</div>}
            {!isLoading && chartOptions && <HighchartsReact
                                                highcharts={Highcharts}
                                                options={chartOptions}
                                                ref={chartRef}
                                                />}
        </>
    )
}

export default Chart;
