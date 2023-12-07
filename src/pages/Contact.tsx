import Layout from "../layouts/Layout"

const lecturers = [
	{
		name: "Mark Attah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 203",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: "Mark Attah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 203",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: "Mark Attah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 203",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: "Mark Attah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 203",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: "Mark Attah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 203",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
	
]

export default function Contact() {
	return (
		<Layout>
			<ul
				role='list'
				className='divide-y divide-gray-100 min-h-[720px]'
			>
				{lecturers.map((lecturer) => (
					<li
						key={lecturer.email}
						className='flex justify-between gap-x-6 py-5'
					>
						<div className='flex min-w-0 gap-x-4'>
							<img
								className='h-12 w-12 flex-none rounded-full bg-gray-50'
								src={lecturer.imageUrl}
								alt=''
							/>
							<div className='min-w-0 flex-auto'>
								<p className='text font-semibold leading-6 text-gray-900'>{lecturer.name}</p>
								<p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                  <a href={`mailto:${lecturer.email}`} className='hover:underline' target="_blank" rel="noreferrer noopener">
                    {lecturer.email}
                    </a>
                    </p>
								<p className='mt-1 truncate text-xs leading-5 text-gray-500'>{lecturer.tel}</p>
							</div>
						</div>
						<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
							<p className='text-sm leading-6 text-gray-900'>{lecturer.course}</p>
							{lecturer.offcieHours ? (
								<p className='mt-1 text-xs leading-5 text-gray-500'>
									Last seen <time dateTime={lecturer.offcieHours}>{lecturer.offcieHours}</time>
								</p>
							) : (
								<div className='mt-1 flex items-center gap-x-1.5'>
									<div className='flex-none rounded-full bg-emerald-500/20 p-1'>
										<div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
									</div>
									<p className='text-xs leading-5 text-gray-500'>Online</p>
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</Layout>
	)
}
