import React from "react";
import Link from "next/link";
import LocaleSwitcher from "../LocalSwitcher/LocalSwitcher";
import { useTranslations } from "next-intl";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    const t= useTranslations('Navbar');
    const navigation: NavigationItem[] = [
        { name: t('home'), href: '#home-section', current: false },
        { name: t('exchange'), href: '#exchange-section', current: false },
        { name: t('features'), href: '#features-section', current: false },
        { name: t('faq'), href: '#faq-section', current: false },
    ]
    return (
        <div className="rounded-md max-w-sm w-full">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            {t('check-your-refund')}
                        </button>
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
