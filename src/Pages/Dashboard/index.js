import { Card, Space, Statistic, Typography } from "antd";
import { BookOutlined } from '@ant-design/icons'
import 'react-calendar/dist/Calendar.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } 
from 'chart.js'; import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


function Dashboard(){
    return (
    <div>
        <Space direction="vertical">
            <Typography.Text>
                <h3>Dashboard</h3>
            </Typography.Text>
                <Space direction="horizontal">
                    <DashCards title={'Math'} num={'75%'}/>
                    <DashCards title={'Statistics'} num={'70%'}/>
                    <DashCards title={'Programming'} num={'82%'}/>
                    <DashCards title={'Software'} num={'79%'}/>
                <Space> 
                </Space>
                </Space>
                <Space>
                    <DashChart /> 
                </Space>
        </Space>
    </div>
    );
}

function DashCards({title, num}){
    return (
        <Card>
                <Space direction="horizontal">
                    <BookOutlined style={{fontSize: '200%', color: 'rgba(53, 162, 235, 5)'}}/>
                    <Statistic title={title} value={num}/>
                </Space>
            </Card>
    )
}

function DashChart(){
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Grade Overview',
          },
        },
      };

    const labels = ['Math', 'Statistics', 'Programming', 'Software'];

    const data = {
    labels,
    datasets: [
        {
        label: 'Score Percentage (%)',
        data: [75, 70, 82, 79],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

    return <Bar options={options} data={data} style={{height:'350px'}}/>;
}

export default Dashboard;