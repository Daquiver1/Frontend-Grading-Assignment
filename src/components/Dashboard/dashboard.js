import React from "react";
import Layout from "../Layout/layout";
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
    data: [400, 430, 448, 470, 540]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: ['Semester one', 'Semester Two', 'Semester Three', 'Semester Four', 'Semester Five'
      ],
    }
  },


};

const state2 = {
          
  series: [{
    data: ['40%', 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Semester one 2020', 'Semester Two 2020', 'Semester One 2021', 'Semester Two 2021', 'Semester One 2022','Semester Two 2022'
      ],
    }
  },


};



export default function Dashboard(){

  const grade = [
    {subject:"Course One",credit:4, assessment:30,term:60,total:90,result:"Pass",grade:"A+",semester:"Semester One",year:"2021/2022"},
    {subject:"Course two",credit:4, assessment:25,term:60,total:85,result:"Pass",grade:"A",semester:"Semester Two",year :"2022/2023"},
 ];

  return(
    <Layout>

<h1 className="mb-2 mt-0 text-5xl  font-medium leading-tight text-center text-primary">Dashboard</h1>


<div className="grid grid-cols-1 gap-4">
<div className="row-span-3 col-span-1 shadow-xl bg-opacity-25">
    <div id="chart">
    <ReactApexChart options={state1.options} series={state1.series} type="bar" height={350} />
  </div>
</div>
<div className="row-span-3 col-span-1">
   <div className="card w-full bg-blue-300 p-3 pl-5 shadow-xl bg-opacity-25">
       <div className="card-header">
           <h2 className="m-2 text-2xl text-center font-small leading-tight text-primary"><b>Released Semester Result</b></h2>
       </div>
       <div className="card-body text-center">
          {
                  grade?.map((data,i)=>(
                    <tr key={i} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{data.subject}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.credit}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.assessment}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.term}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.total}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.result}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.grade}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.semester}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.year}</td>
                  </tr>
                  ))
                }
        </div>
       <div className="card-footer"></div>
   </div>
    {/* <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="donut" />
     </div> */}
</div>
</div>
    </Layout>
  )
}