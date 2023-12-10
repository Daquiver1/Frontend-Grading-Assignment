import ugLogo from "../assets/ug.png"

import { ReactComponent as Bag } from "../assets/bag.svg"
import { ReactComponent as Exit } from "../assets/exit.svg"
import { ReactComponent as Home } from "../assets/home.svg"
import { ReactComponent as Info } from "../assets/info.svg"
import { ReactComponent as Library } from "../assets/library.svg"
import { ReactComponent as Refresh } from "../assets/refresh.svg"
import { ReactComponent as Resume } from "../assets/resume.svg"
import { useNavigate } from 'react-router-dom'


import { classNames } from "../utils/classNames"
import { Cog6ToothIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"

const navigation = [
	{ name: "Dashboard", to: "/", Icon: Home, current: false },
	{ name: "Reports", to: "/reports", Icon: Bag, current: false },
	{ name: "Grade Form", to: "/grade-form" ,Icon: Resume, current: false },
	{ name: "Contact", to: "/contact", Icon: Info, current: false },
	{ name: "Support", to: "/support", Icon: Library, current: false },
]

const SidebarContent = () => {
	const navigate = useNavigate()
  return (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-blue-500 px-6 pt-8 pb-4'>
						<div className='flex h-16 shrink-0 items-center'>
							<img
								className='h-8 w-auto'
								src={ugLogo}
								alt='Careers and Counselling center'
							/>
							<h3 className="text-white font-medium pl-4">Student Missing Grade Reporter</h3>
						</div>
						<nav className='flex flex-1 flex-col px-4 pt-6'>
							<ul
								role='list'
								className='flex flex-1 flex-col gap-y-7'
							>
								<li>
									<ul
										role='list'
										className='-mx-2 space-y-6'
									>
										{navigation.map((Item) => (
											<li key={Item.name}>
												<NavLink
													to={Item.to}
													className={({isActive, isPending} : {isActive: boolean, isPending: boolean})  => {
														// Item.current = isActive
														return `group flex gap-x-3 rounded-md p-2 text-lg leading-6 font-medium ${isActive ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:text-white hover:bg-indigo-700'}`}
													}
													// className={classNames(
														// Item.current
														// ? "bg-indigo-700 text-white"
														// : "text-indigo-200 hover:text-white hover:bg-indigo-700",
														// "group flex gap-x-3 rounded-md p-2 text-lg leading-6 font-medium"
													// }
												>
													<div
														className={classNames(
															Item.current
																? "text-white fill-white "
																: "text-indigo-200 group-hover:text-white",
															"h-6 w-6 shrink-0 "
														)}
														aria-hidden='true'
													>
														<Item.Icon
															className={`${
																Item.current ? "fill-white" : "fill-[#ADADAD]"
															} group-hover:fill-white`}
														/>
													</div>
													{Item.name}
												</NavLink>
											</li>
										))}
									</ul>
								</li>
							
								<li className='mt-12 space-y-6'>
									<a
										href='#'
										className='group -mx-2 flex gap-x-3 rounded-md p-2 text-lg font-medium leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white'
									>
										<Cog6ToothIcon
											className='h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white'
											aria-hidden='true'
										/>
										Settings
									</a>
                                    <a
										href='#'
										onClick={()=>navigate("/signin")}
										className='group -mx-2 flex items-center gap-x-3 rounded-md p-2 text-lg font-medium leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white'
									>
										<Exit
											className='h-4 w-6 shrink-0 text-indigo-200 group-hover:text-white'
											aria-hidden='true'
										/>
										Logout
									</a>
								</li>
							</ul>
						</nav>
					</div>
  )
}

export default SidebarContent