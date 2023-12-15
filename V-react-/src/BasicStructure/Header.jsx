/* eslint-disable no-unused-vars */
// NavBar.jsx
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, XIcon as XMarkIcon } from '@heroicons/react/outline';
import { MenuIcon as Bars3Icon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/home', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          {/* Rest of your code remains unchanged */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-transparent-900 text-black hover:underline hover:text-white' : 'text-black-300 hover:underline hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Rest of your code remains unchanged */}
        </>
      )}
    </Disclosure>
  );
}
