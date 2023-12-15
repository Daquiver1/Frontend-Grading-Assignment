import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GradesChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if there is an existing Chart instance
    if (chartInstance.current) {
      // If there is, destroy the existing instance before creating a new one
      chartInstance.current.destroy();
    }

    // Create a new Chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels, // Course names
        datasets: [
          {
            label: 'Grade Distribution',
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 1,
            data: data.values, // Grade values
          },
        ],
      },
    });

    // Cleanup Chart instance on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width={20} height={15} />;
};

export default GradesChart;
