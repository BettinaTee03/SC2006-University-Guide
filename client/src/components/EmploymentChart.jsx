import React from "react";
import ReactApexChart from "react-apexcharts";
import { Container, Grid } from "@mui/material";

function EmploymentChart({ courseName, employmentData }) {
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
            return (
              "Mean: $" + value.toFixed(2) + "<br>" + "Median: $" + medianValue
            );
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

  return (
    <>
      <Container maxWidth="lg">
            {employmentData.length > 0 ? (
              <ReactApexChart options={options} series={series} />
            ) : (
              <p>No employment data is available.</p>
            )}
      </Container>
    </>
  );
}

export default EmploymentChart;
