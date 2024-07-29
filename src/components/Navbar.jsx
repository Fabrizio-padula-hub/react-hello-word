import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ImgLogo from '../assets/img/logo-ok.png'

const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Catalogo', href: '#', current: false },
    { name: 'Collezioni', href: '#', current: false },
    { name: 'Novità', href: '#', current: false },
    { name: 'Gallery', href: '#', current: false },
    { name: 'Servizi', href: '#', current: false },
    { name: 'Chi Siamo', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    useEffect(() => {
        ScrollReveal().reveal('.blur', {
            distance: '0px',
            opacity: 0.8
        });
    }, []);

    return (
        <Disclosure as="nav" className="bg-[#f5f5f7]">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5 blur" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:justify-between">
                        <div className="flex flex-shrink-0 items-center me-10">
                            <img className='w-full h-9 my-2' src={ImgLogo} alt="Logo" />
                        </div>
                        <div className="hidden lg:ml-6 md:block w-full">
                            <div className="flex grow items-center justify-between">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
