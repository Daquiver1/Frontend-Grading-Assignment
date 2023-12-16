// import { Bag, home, info, library, refresh, resume } from "./assets/index"

import { Fragment, ReactNode, useState } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

import SidebarContent from "./SidebarContent"
import SortSelect from "../components/dashboard/SortSelect"

import { classNames } from "../utils/classNames"

const userNavigation = [
	{ name: "Your profile", href: "#" },
	{ name: "Sign out", href: "#" },
]

export default function Layout({ children }: { children?: ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	return (
		<>
			<div className="w-screen">
				<Transition.Root
					show={sidebarOpen}
					as={Fragment}
				>
					<Dialog
						as='div'
						className='relative z-50 lg:hidden'
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter='transition-opacity ease-linear duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-linear duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-gray-900/80' />
						</Transition.Child>

						<div className='fixed inset-0 flex'>
							<Transition.Child
								as={Fragment}
								enter='transition ease-in-out duration-300 transform'
								enterFrom='-translate-x-full'
								enterTo='translate-x-0'
								leave='transition ease-in-out duration-300 transform'
								leaveFrom='translate-x-0'
								leaveTo='-translate-x-full'
							>
								<Dialog.Panel className='relative mr-16 flex w-full max-w-[290px] flex-1'>
									<Transition.Child
										as={Fragment}
										enter='ease-in-out duration-300'
										enterFrom='opacity-0'
										enterTo='opacity-100'
										leave='ease-in-out duration-300'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'
									>
										<div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
											<button
												type='button'
												className='-m-2.5 p-2.5'
												onClick={() => setSidebarOpen(false)}
											>
												<span className='sr-only'>Close sidebar</span>
												<XMarkIcon
													className='h-6 w-6 text-white'
													aria-hidden='true'
												/>
											</button>
										</div>
									</Transition.Child>
									<SidebarContent />
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[290px] lg:flex-col'>
					<SidebarContent />
				</div>

				<div className='lg:pl-72 sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
					<button
						type='button'
						className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
						onClick={() => setSidebarOpen(true)}
					>
						<span className='sr-only'>Open sidebar</span>
						<Bars3Icon
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</button>

					{/* Separator */}
					<div
						className='h-6 w-px bg-gray-900/10 lg:hidden'
						aria-hidden='true'
					/>

					<div className='relative flex flex-1 px-2 pl-6 box-border gap-x-4 items-center self-stretch lg:gap-x-6'>
						<div className='w-1/5'>
							{/* <SortSelect /> */}
						</div>
						<form
							className='relative flex h-full items-center ml-auto w-1/5'
							action='#'
							method='GET'
						>
							<label
								htmlFor='search-field'
								className='sr-only'
							>
								Search
							</label>
							<MagnifyingGlassIcon
								className='pointer-events-none absolute  left-2 top-1/2 -translate-y-1/2 h-full w-5 text-gray-400'
								aria-hidden='true'
							/>
							<input
								id='search-field'
								className='block h-3/5 w-full border-0 py-0 indent-12 pr-0 text-gray-900 bg-[#F4F9FF] ring-[#ededed] ring-1 rounded placeholder:text-gray-400 focus:ring-0 sm:text-sm'
								placeholder='Search...'
								type='search'
								name='search'
							/>
						</form>
						<div className='flex items-center gap-x-4 lg:gap-x-6'>
							<button
								type='button'
								className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative'
							>
								<span className='absolute z-10 bg-red-500 rounded-full aspect-square h-4 flex items-center justify-center py-3 text-white top-0 right-0'>
									4
								</span>
								<span className='sr-only'>View notifications</span>
								<BellIcon
									className='h-6 w-6'
									aria-hidden='true'
								/>
							</button>

							{/* Separator */}
							<div
								className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10'
								aria-hidden='true'
							/>

							{/* Profile dropdown */}
							<Menu
								as='div'
								className='relative'
							>
								<Menu.Button className='-m-1.5 flex items-center p-1.5'>
									<span className='sr-only'>Open user menu</span>
									<img
										className='h-12 w-12 rounded-full bg-gray-50'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
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
									<Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
										{userNavigation.map((item) => (
											<Menu.Item key={item.name}>
												{({ active }) => (
													<a
														href={item.href}
														className={classNames(
															active ? "bg-gray-50" : "",
															"block px-3 py-1 text-sm leading-6 text-gray-900"
														)}
													>
														{item.name}
													</a>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
				<div className='lg:pl-72 w-full min-h-[90vh] overflow-y-auto box-border'>
					<main className='py-10 bg-blue-200/20 h-full w-full box-border'>
						<div className='px-4 sm:px-6 lg:px-8 h-full w-full'>
							{children}
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
