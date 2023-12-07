import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

import { Bar, Line } from "react-chartjs-2"
import DropMenu from "./DropMenu"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

ChartJS.defaults.scale.grid.display = false
// ChartJS.defaults.plugins.legend.maxHeight = 2000
ChartJS.defaults.plugins.legend.display = false
ChartJS.defaults.layout.autoPadding = false



// ChartJS.defaults.aspectRatio = 2

// ChartJS.defaults.plugins.legend.labels.useBorderRadius = true
// ChartJS.defaults.plugins.legend.labels.borderRadius = 999

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
}

const data = [
	{
		Grade: "A",
		number: 2,
	},
	{
		Grade: "B+",
		number: 0,
	},
	{
		Grade: "B",
		number: 1,
	},
	{
		Grade: "C+",
		number: 1,
	},
	{
		Grade: "C",
		number: 0,
	},
	{
		Grade: "D+",
		number: 0,
	},
	{
		Grade: "D",
		number: 1,
	},
	{
		Grade: "E+",
		number: 0,
	},
	{
		Grade: "E",
		number: 0,
	},
	{
		Grade: "F",
		number: 0,
	},
]

const DashboardChart = () => {
	return (
		<div className='relative bg-white pt-16 w-full'>
			{/* <div className='absolute top-2 left-1/2 -translate-x-1/2 flex gap-x-2 md:gap-x-8 items-center justify-end w-fit'>
				<div className='flex items-center gap-x-1 md:gap-x-4'>
					<span className='w-4 h-4 bg-blue-900 block rounded-full'></span>
					<p className="text-xs md:text-sm">Accepted</p>
				</div>
				<div className='flex items-center gap-x-1 md:gap-x-4'>
					<span className='w-4 h-4 bg-green-600 block rounded-full'></span>
					<p className="text-xs md:text-sm">Canceled</p>
				</div>
				<DropMenu />
			</div> */}
			<Bar
				options={options}
				data={{
					labels: data.map((row) => row.Grade),

					datasets: [
						{
							label: "Grades",
							backgroundColor: "#153D6F",
							data: data.map((row) => row.number),
							borderRadius: 1000,
							borderWidth: 10,
							borderColor: "rgba(0, 0, 0, 0)",
							inflateAmount: 0,
							barPercentage: .75,
							
						},
					],
				}}
			/>
			
		</div>
	)
}

export default DashboardChart
