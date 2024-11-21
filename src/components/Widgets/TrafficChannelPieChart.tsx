import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ApexCharts from "react-apexcharts";

const TrafficChannelPieChart = () => {
  const [series, setSeries] = useState<number[]>([50, 30, 20]);
  const [currentOptions, _] = useState<ApexOptions>({
    chart: {
      type: "donut",
    },
    labels: ["Direct", "Referral", "Organic"],
    colors: ["hsl(241, 40%, 48%)", "hsl(220, 70%, 65%)", "hsl(265, 70%, 65%)"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "20px",
      fontWeight: 400,
      labels: {
        useSeriesColors: true,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
        expandOnClick: true,
        dataLabels: {
          offset: -10, // Adjust offset for spacing between labels and chart
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value}%`,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "16px", // Custom font size for the percentage labels
        fontFamily: "Montserrat, sans-serif", // Custom font family
        fontWeight: "bold",
        colors: ["#000"], // Font color
      },
      dropShadow: {
        enabled: false,
      },
      formatter: (val: number, opts) => `${val.toFixed(1)}%`, // Show percentage with one decimal place

      background: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  });

  //   const [currentOptions, _] = useState<ApexOptions>(
  //     // Define the data and options for the chart
  //     {
  //       chart: {
  //         type: "donut",
  //       },
  //       labels: ["Direct", "Referral", "Organic"], // Categories
  //       colors: [
  //         "hsl(241, 40%, 48%)",
  //         "hsl(220, 70%, 65%)",
  //         "hsl(265, 70%, 65%)",
  //       ], // Custom colors for each category
  //       legend: {
  //         show: true,
  //         position: "bottom", // Position the legend (labels) below the chart
  //         horizontalAlign: "center", // Align legend horizontally to the center
  //         fontSize: "14px", // Font size for the labels
  //         fontWeight: 400, // Font weight for the labels
  //         labels: {
  //           useSeriesColors: true, // Use the same colors as the chart for labels
  //         },
  //       },
  //       plotOptions: {
  //         pie: {
  //           donut: {
  //             size: "65%", // Donut chart style (optional)
  //           },
  //         },
  //       },
  //       tooltip: {
  //         y: {
  //           formatter: (value: number) => `${value}%`, // Format tooltip to show percentage
  //         },
  //       },
  //       responsive: [
  //         {
  //           breakpoint: 600,
  //           options: {
  //             chart: {
  //               height: 250, // Resize chart for smaller screens
  //             },
  //           },
  //         },
  //       ],
  //     }
  //   );

  return (
    <ApexCharts
      options={currentOptions}
      series={series}
      type="donut"
      height={300} // Set the height of the chart
    />
  );
};

export default TrafficChannelPieChart;
