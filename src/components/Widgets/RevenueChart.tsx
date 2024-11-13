import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { lineChartData, months } from "../../constants/chartData";
import Card from "./Card";

type EachSeries = {
  name: string;
  data: number[];
};

const RevenueChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  const [currentOptions, _] = useState<ApexOptions>({
    chart: {
      zoom: {
        enabled: false,
      },
      height: 280,
      type: "line",
      animations: {
        enabled: true,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#4b49ac", "#d5971f"],
    yaxis: {
      stepSize: 15000,
      labels: {
        style: {
          fontWeight: "bold",
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          colors: "#4b49ac",
          fontSize: "12px",
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
  });

  const [series, setSeries] = useState<EachSeries[]>([
    {
      name: "Revenue",
      data: lineChartData[selectedYear].Revenue,
    },
    {
      name: "Expense",
      data: lineChartData[selectedYear].Expense,
    },
  ]);

  const handleChangeYear = (newYear: string) => {
    setSelectedYear(newYear);
  };

  const updateSeriesData = () => {
    setSeries([
      {
        name: "Revenue",
        data: lineChartData[selectedYear].Revenue,
      },
      {
        name: "Expense",
        data: lineChartData[selectedYear].Expense,
      },
    ]);
  };

  useEffect(() => {
    updateSeriesData();
  }, [selectedYear]);

  return (
    <>
      <div className="flex justify-between items-center mx-2 mt-6 w-full">
        <select
          value={selectedYear}
          onChange={(e) => handleChangeYear(e.target.value)}
          className="btn-tertiary"
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <Chart
        options={currentOptions}
        series={series}
        type="line"
        height={280}
        className="w-full"
      />
    </>
  );
};

export default RevenueChart;
