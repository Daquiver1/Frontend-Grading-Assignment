
import Layout from "../layouts/Layout"


const grades = [
	{
		id: 1,
		name: "DCIT 203",
		fullName: "Digital something something",
		grade: "A",
		status: "Completed",
		createdBy: "Mark Atta",
		examDate: "March 17, 2023",
		semester: "1",
		year: "2023/2024",
	},
	{
		id: 2,
		name: "DCIT 205",
		fullName: "Digital something something",
		grade: "A",
		status: "Completed",
		createdBy: "Mark Atta",
		examDate: "March 17, 2023",
		semester: "1",
		year: "2023/2024",
	},
	{
		id: 3,
		name: "DCIT 207",
		fullName: "Digital something something",
		grade: "C+",
		status: "Completed",
		createdBy: "Mark Atta",
		examDate: "March 17, 2023",
	},
	{
		id: 4,
		name: "DCIT 202",
		fullName: "Digital something something",
		grade: "B",
		status: "Completed",
		createdBy: "Mark Atta",
		examDate: "March 17, 2023",
		semester: "1",
		year: "2023/2024",
	},
	{
		id: 5,
		name: "DCIT 212",
		fullName: "Digital something something",
		grade: "D",
		status: "Completed",
		createdBy: "Mark Atta",
		examDate: "March 17, 2023",
		semester: "1",
		year: "2023/2024",
	},
	
]

export default function Reports() {
	return (
		<Layout>
			<ul
				role='list'
				className='divide-y divide-gray-100 min-h-[720px] px-32'
			>
				{grades.map((grade) => (
					<li
						key={grade.id}
						className='flex items-center justify-between gap-x-6 py-5'
					>
						<div className='min-w-0'>
							<div className='flex flex-col items-start gap-x-3'>
								<p className='text-lg font-semibold leading-6 text-gray-900'>Course Code: {grade.name}</p>
								<p className='text-sm  leading-6 text-gray-900'>Full Name: {grade.fullName}</p>
							</div>
							<div className='mt-1 flex flex-col  gap-x-2 text-xs leading-5 text-gray-500'>								
								<p className='truncate'>Lecturer: {grade.createdBy}</p>
								<p className='truncate'>Status: {grade.status}</p>
								<p className='truncate'>Exams: {grade.examDate}</p>
								<p className='truncate'>Semester: {grade.semester}</p>
								<p className='truncate'>Year: {grade.year}</p>
							</div>
						</div>
						<div className='flex flex-none items-center gap-x-4'>
							<a
								href={grade.href}
								className='hidden rounded-md  p-4 text-lg font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block'
							>
								{grade.grade}<span className='sr-only'>, {grade.name}</span>
							</a>
							{/* <Menu
								as='div'
								className='relative flex-none'
							>
								<Menu.Button className='-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900'>
									<span className='sr-only'>Open options</span>
									<EllipsisVerticalIcon
										className='h-5 w-5'
										aria-hidden='true'
									/>
								</Menu.Button>
								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? "bg-gray-50" : "",
														"block px-3 py-1 text-sm leading-6 text-gray-900"
													)}
												>
													Edit<span className='sr-only'>, {grade.name}</span>
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? "bg-gray-50" : "",
														"block px-3 py-1 text-sm leading-6 text-gray-900"
													)}
												>
													Move<span className='sr-only'>, {grade.name}</span>
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? "bg-gray-50" : "",
														"block px-3 py-1 text-sm leading-6 text-gray-900"
													)}
												>
													Delete<span className='sr-only'>, {grade.name}</span>
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu> */}
						</div>
					</li>
				))}
			</ul>
		</Layout>
	)
}
