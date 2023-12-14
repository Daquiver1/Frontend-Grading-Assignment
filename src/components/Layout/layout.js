import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { BookOpenIcon, BuildingLibraryIcon, PhoneIcon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'



const filters = [

 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({children},props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const navigate = useNavigate();

  const subCategories = [
    { name: 'Dashboard', href: '#', icon:<Squares2X2Icon className="h-6 w-6 text-blue-500 mt-5 ml-8 float-left"  width={30} height={30} /> ,handleclick:()=>navigate('/dashboard')},
    { name: 'Grade Report', href: '#' ,icon:<BookOpenIcon  className="h-6 w-6 text-blue-500  ml-8  float-left"  width={30} height={30}/>, handleclick:()=>navigate('/grade') },
    { name: 'Missing Grade Form', href: '#', icon:<BuildingLibraryIcon  className="h-6 w-6 text-blue-500  ml-8 float-left"  width={30} height={30}/>, handleclick:()=>navigate('/grade-form') },
    { name: 'Instructor Contact', href: '#', icon:<PhoneIcon  className="h-6 w-6 text-blue-500  ml-8 float-left"  width={30} height={30}/>,handleclick:()=>navigate('/instructor')},
    { name: 'Help and Support', href: '#', icon:<UserGroupIcon  className="h-6 w-6 text-blue-500  ml-8 float-left"  width={30} height={30}/> ,handleclick:()=>navigate('/support')},
  ]


  const sortOptions = [
    { name: 'Logout ', href: '#', current: true, handleLogout:()=>navigate('/login') },
    { name: 'Standby', href: '#', current: false },
    { name: 'Profile', href: '#', current: false },
  ]

  

//   const handleLogout = () =>{

//     alert(2333)
//     // navigate('login')

//   }

 

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((data,i) => (
                        <li key={i}>
                          <a href={data.href} onClick={data.handleclick} className="block px-2 py-3">
                            {data.name}
                          </a>
                        </li>
                      ))} 
                    </ul>

 
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10 bg-blue-800">
            <h1 className="text-2xl font-bold tracking-tight text-white pl-4">GRADING SYSTEM</h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group text-white inline-flex justify-center text-sm font-medium text-white hover:text-white">
                    Ewurafua Quansah
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              onClick={option.handleLogout}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          
           
          </div>

          <section aria-labelledby="products-heading" className=" pt-0">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block shadow-xl bg-white-400 h-screen pl-4">
                <h3 className="sr-only">Categories</h3>
                <ul>
                  {subCategories.map((category) => (
                    <>
                    {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {category.icon}
                    <li  key={category.name} className='border-b text-center m-4'>
                      <a  href={category.href} onClick={category.handleclick} className="block px-2 py-3 hover:text-blue-500">
                         {category.name}
                         </a>
                    </li>
                    </>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}  
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">

                {children}

                {/* Your content */}
                </div>
                
            </div>
          </section>
          
        </main>

        
      </div>


      
      
    </div>




    
  )
}