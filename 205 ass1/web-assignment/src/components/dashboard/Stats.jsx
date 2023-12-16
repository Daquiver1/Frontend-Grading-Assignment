// import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/20/solid"
import { ReactComponent as CardIcon } from "../../assets/cardIcon.svg"

const grades = [
	{ name: "DCIT 203", grade: "A",  },
	{ name: "DCIT 205", grade: "A", },
	{ name: "DCIT 207", grade: "C+",  },
	{ name: "DCIT 202", grade: "B", },
	{ name: "DCIT 212", grade: "D", },
	{ name: "DCIT 209", grade: "B+",},
]

export default function Example() {
	return (
		<div className='w-full overflow-auto'>
			{/* <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3> */}
			{/* <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"> */}
			<div className='flex py-4 px-4 w-fit gap-x-8 overflow-visible items-center justify-around'>
				{grades.map((item) => (
					<div
						key={item.name}
						className='w-60 h-[150px] rounded-lg bg-white px-4 py-4 pb-2  flex items-center shadow sm:px-6'
					>
						<div className='space-y-2 mb-4'>
							<div className='flex items-center justify-between w-full gap-x-16'>
								<h3 className='font-normal text-gray-400'>{item.name}</h3>
								<CardIcon />
							</div>
							<p className='font-medium text-3xl text-center'>{item.grade}</p>
						</div>
						
					</div>
				))}
			</div>
		</div>
	)
}




