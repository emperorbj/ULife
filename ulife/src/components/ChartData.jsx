import { userData } from "../db/users"
import { Chart } from "react-google-charts";

const ChartData = () => {
    // Transform user data to chart-compatible format
    const prepareChartData = (data) => {
        const bloodPressureData = [
            ["Month", "Blood Pressure"] // Headers for the chart
        ];

        data[0].user.bloodPressureReadings.forEach((reading) => {
            bloodPressureData.push([reading.month, reading.bloodPressure]);
        });

        return bloodPressureData;
    };
    // Prepare data
    const chartData = prepareChartData(userData);
    return (
        <Chart
        className="rounded-md text-sm"
            chartType="LineChart"
            width="100%"
            height="400px"
            data={chartData}
            options={{
                title: "Monthly Blood Pressure",
                hAxis: { title: "Month" },
                vAxis: { title: "Blood Pressure" },
                colors: ["#1b9e77","#d95f02"],
                legend: {position:"bottom"},
            }}
        />
    )
}

export default ChartData
