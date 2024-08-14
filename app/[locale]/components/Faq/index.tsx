"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useTranslations } from "next-intl";

interface faqdata {
    heading: string;
    subheading: string;
}


const Faq = () => {
    const t= useTranslations('Faq');
    const faqdata: faqdata[] = [
        {
            heading: t('q1'),
            subheading: t('a1')
        },
        {
            heading: t('q2'),
            subheading: t('a2') },
        {
            heading: t('q3'),
            subheading: t('a3')
        },
        // {
        //     heading: "4. How do I start using Backcom.exchange?",
        //     subheading: "Simply sign up, connect your trading accounts, and let us handle the rest. You'll start seeing fee returns in no time."
        // },
    ];
    return (
        <div className="my-0 px-6 pt-20" id="faq">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">{t('frequently-asked-and-question')}</h3>
            {/* <p className="text-center lg:text-lg font-normal text-bluish">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industry standard dummy text ever since the 1500s,</p> */}

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
