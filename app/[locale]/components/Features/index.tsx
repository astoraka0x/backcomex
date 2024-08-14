import { useTranslations } from "next-intl";
import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const Features = () => {
    const t= useTranslations('Features');
    const featuresdata: featuresdata[] = [
        {
            imgSrc: '/images/Features/featureOne.svg',
            heading: t('secure-storage'),
            subheading: t('data-security-and-privacy'),
        },
        {
            imgSrc: '/images/Features/featureTwo.svg',
            heading: t('high-rate'),
            subheading: t('best-rate-cashback-for-trader'),
        },
        {
            imgSrc: '/images/Features/featureThree.svg',
            heading: t('real-time-cashback'),
            subheading: t('daily-24-7-cashback'),
        },
    ]
    return (
        <div className="mx-auto max-w-7xl mt-0 pt-48 mb-16 px-6 relative" id="features">

            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-1 gap-x-4 gap-y-4">
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 ">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Features;
