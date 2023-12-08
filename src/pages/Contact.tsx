import Layout from "../layouts/Layout"

const lecturers = [
	{
		name: "Mark Attah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 207",
		imageUrl:
			"https://media.licdn.com/dms/image/D4D03AQFM2tsz2Reprg/profile-displayphoto-shrink_800_800/0/1696783518621?e=2147483647&v=beta&t=_ZiCa7WXCRMhO3XJu32J3SUYkeDwRgxKDQzdPau8GTQ",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: " Dwumfour Abdullai Abdul-Aziz",
		email: "adwumfour@ug.edu.gh",
    tel: "233-260541219",
    course: "DCIT 203",
		imageUrl:
			"https://i1.rgstatic.net/ii/profile.image/909208878866433-1593783697363_Q512/Abdullai-Dwumfour.jpg",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: "Michael Abgo Tetteh Soli",
		email: "mark.atta@example.com",
    tel: "233-260541219   ",
    course: "DCIT 205",
		imageUrl:
			"https://media.licdn.com/dms/image/C4E03AQGTpx5t09-ADA/profile-displayphoto-shrink_800_800/0/1595237435787?e=2147483647&v=beta&t=l9mEi35Ku6NFp69mEDr1Vr0J0Qd-1Kka83SV7XwrODo",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: " Paul Nti Nii Ammah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 201",
		imageUrl:
			"https://www.polymorphlabs.io/static/media/paul.830a8db989ed5598c07d.jpg",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},
  {
		name: "Mark Attah Mensah",
		email: "mark.atta@example.com",
    tel: "233-2302324444",
    course: "DCIT 209",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5bvAlw87Xu5bvsulw01mrSRJKxRDZUSR7xi9X2TJdc7-DezcTL7RiIreaNkvjxTrl1w&usqp=CAU",
		offcieHours: "Monday - Friday 8:00am - 5:00pm",
	},

	{
		name: "Dr. Nancy Miles",
		email: "nancy.atta@example.com",
    tel: "233-2302324444",
    course: "CBAS 210",
		imageUrl:
			"https://coh.ug.edu.gh/sites/default/files/Faculty%20Spotlight/Nancy-Myles-Baffour.jpg",
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
