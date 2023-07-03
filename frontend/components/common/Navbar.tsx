'use client';
import React from 'react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
// import { logout } from '@/redux/features/authSlice';//To avoid conflics in names
import { logout as setLogout } from '@/redux/features/authSlice';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export default function Navbar() {
  const pathname = usePathname();
	const dispatch = useAppDispatch();
	const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector(state => state.auth);
  const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
  };
  const isSelected = (path: string) => (pathname === path ? true : false);
  const authLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink>
			<NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink>
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/auth/login')}
				isMobile={isMobile}
				href='/auth/login'
			>
				Login
			</NavLink>
			<NavLink
				isSelected={isSelected('/auth/register')}
				isMobile={isMobile}
				href='/auth/register'
			>
				Register
			</NavLink>
		</>
	);
  return (
      <nav>
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <img
                          className="block h-8 w-auto lg:hidden"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                        <img
                          className="hidden h-8 w-auto lg:block"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                        <Link href='/' className='ml-2 text-gray-300 font-medium'>
                          Full Authentication
                        </Link>
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {/* Navbar items here */}
                          {isAuthenticated
                          ? authLinks(false)
                          : guestLinks(false)}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                      {isAuthenticated
                        ? authLinks(false)
                        : guestLinks(false)}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
      </nav>
  )
}
