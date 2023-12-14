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
const state1 = {
        
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: ['Course one', 'Course Two', 'Course Three', 'Course Four', 'Course Five'
      ],
    }
  },


};
