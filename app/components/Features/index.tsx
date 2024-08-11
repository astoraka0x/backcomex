import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Secure storage',
        subheading: 'Data security and privacy',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'High-rate',
        subheading: 'Best rate cashback for trader',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Real-time cashback',
        subheading: 'Daily 24/7 cashback',
    },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative" id="features-section">

            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-1 gap-x-4 gap-y-4">
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    {/* <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">The high-rate cashback platform</h2> */}
                    {/* <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p> */}
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
