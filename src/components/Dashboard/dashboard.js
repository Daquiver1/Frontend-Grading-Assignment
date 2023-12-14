import React from "react";
import Layout from '../Layout/layout';
import ReactApexChart from "react-apexcharts";




const state = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100,
          height:100
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};
