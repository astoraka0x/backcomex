/* eslint-disable */
import { Disclosure } from '@headlessui/react';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import LocaleSwitcher from '../LocalSwitcher/LocalSwitcher';
import { useTranslations } from 'next-intl';
// import Contactusform from './Contactus';
// import {Link} from '@/navigation';
import Link from 'next/link';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const t= useTranslations('Navbar');
    const navigation: NavigationItem[] = [
        { name: t('home'), href: '#home-section', current: false },
        { name: t('exchange'), href: '#exchange-section', current: false },
        { name: t('features'), href: '#features-section', current: false },
        { name: t('faq'), href: '#faq-section', current: false },
    ]
    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                
                                <img
                                    className="block h-10 w-20px lg:hidden"
                                    src={'/images/Logo/logo.svg'}
                                    alt="Crypto-Logo"
                                />
                                <img
                                    className="hidden h-14 w-20px lg:block"
                                    src={'/images/Logo/logo.svg'}
                                    alt="Crypto-Logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                            </div>
                            <button className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white'>{t('check-your-refund')}</button>
                           <LocaleSwitcher/>
                            {/* <Contactusform /> */}
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
