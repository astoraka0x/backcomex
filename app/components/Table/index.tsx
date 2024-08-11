import Image from "next/image";

interface table {
    index: number;
    name: string;
    price: number;
    rate: number;
    cap: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "34098-14",
        imgSrc: '/images/Companies/kucoin.svg',
        price: 16458.23,
        rate: 50,
        cap: 16828.25,
        action: "Daily",
    },
    {
        index: 2,
        name: "34098-14",
        imgSrc: '/images/Companies/kucoin.svg',
        price: 16458.23,
        rate: 50,
        cap: 16828.80,
        action: "Daily",
    },
    {
        index: 3,
        name: "35598-14",
        imgSrc: '/images/Companies/kucoin.svg',
        price: 16458.23,
        rate: 50,
        cap: 16828.30,
        action: "Daily",
    },
    {
        index: 4,
        name: "3940384",
        imgSrc: '/images/Companies/kucoin.svg',
        price: 16458.23,
        rate: 50,
        cap: 16828.42,
        action: "Daily",
    },
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="top-user-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Top Cash back Data</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">UID</th>
                                <th className="px-4 py-4 font-normal">TRADING FEE</th>
                                <th className="px-4 py-4 font-normal">Rate</th>
                                <th className="px-4 py-4 font-normal">CASHBACK</th>
                                <th className="px-4 py-4 font-normal">TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 "><Image src={items.imgSrc} alt={items.imgSrc} height={50} width={50} />{items.name}</td>
                                    <td className="px-4 py-6 text-center text-white">${items.price.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.rate < 0 ? 'text-red' : 'text-green'} `}>{items.rate}%</td>
                                    <td className="px-4 py-6 text-center text-white">${items.cap.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center text-green`}>
                                        {items.action}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Table;
