import React from "react";
import ReactApexChart from "react-apexcharts";
import useMediaQuery from "@mui/material/useMediaQuery";

function EmploymentChart({ courseName, employmentData }) {
  const isSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const years = employmentData.map((item) => item.year);
  const basicSalaries = employmentData.map((item) =>
    parseFloat(item.basic_monthly_mean)
  );
  const basicSalariesMedian = employmentData.map((item) =>
    parseFloat(item.basic_monthly_median)
  );
  const grossSalaries = employmentData.map((item) =>
    parseFloat(item.gross_monthly_mean)
  );
  const grossSalariesMedian = employmentData.map((item) =>
    parseFloat(item.gross_monthly_median)
  );
  const employmentRates = employmentData.map((item) =>
    parseFloat(item.employment_rate_overall)
  );

  const options = {
    chart: {
      stacked: false,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    title: {
      text: courseName,
    },
    colors: ["#99C2A2", "#C5EDAC", "#66C7F4"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
      },
    },
    xaxis: {
      type: "category",
      categories: years,
      labels: {
        style: {
          fontSize: isSM ? "10px" : "16px",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Basic Salary",
        labels: {
          formatter: function (val) {
            return `$${val}`;
          },
        },
        title: {
          text: "Basic Salary",
        },
      },
      {
        seriesName: "Basic Salary",
        show: false,
      },
      {
        opposite: true,
        min: 0,
        max: 100,
        seriesName: "Employment Rate",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        labels: {
          formatter: function (val) {
            return val + "%";
          },
          style: {
            fontSize: isSM ? "8px" : "16px",
          },
        },
        title: {
          text: "Employment Rate (%)",
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      y: {
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          const seriesName = w.config.series[seriesIndex].name;
          if (seriesName === "Basic Salary") {
            const medianValue = basicSalariesMedian[dataPointIndex];
            return "Mean: $" + value + "<br>" + "Median: $" + medianValue;
          } else if (seriesName === "Gross Salary") {
            const medianValue = grossSalariesMedian[dataPointIndex];
            return "Mean: $" + value + "<br>" + "Median: $" + medianValue;
          } else {
            return value + "%";
          }
        },
      },
    },
  };

  const series = [
    {
      name: "Basic Salary",
      type: "column",
      data: basicSalaries,
    },
    {
      name: "Gross Salary",
      type: "column",
      data: grossSalaries,
    },
    {
      name: "Employment Rate",
      type: "line",
      data: employmentRates,
    },
  ];

  const chartHeight =
    window.innerWidth * 0.8 > window.innerHeight
      ? window.innerHeight * 0.8
      : window.innerWidth * 0.7;
  const chartWidth =
    window.innerWidth * 0.8 > window.innerHeight
      ? window.innerHeight * 0.85
      : window.innerWidth * 0.85;

  return (
    <>
      {employmentData.length > 0 ? (
        <ReactApexChart
          options={options}
          series={series}
          height={chartHeight}
          width={chartWidth}
        />
      ) : (
        <p>No employment data is available.</p>
      )}
    </>
  );
}

export default EmploymentChart;
