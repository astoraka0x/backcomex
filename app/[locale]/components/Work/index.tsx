"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface workdata {
  imgSrc: string;
  heading: string;
  type: string;
  refcode: string;
  rate: string;
  link: string;
}

const Work = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (refCode: string) => {
    navigator.clipboard.writeText(refCode);
    setCopied(refCode);
    setTimeout(() => setCopied(null), 3000); // Reset after 2 seconds
  };

  const t = useTranslations("Work");
  const workdata: workdata[] = [
    {
      imgSrc: "/images/Companies/kucoin.svg",
      heading: "Kucoin",
      type: t("daily"),
      refcode: "QBS17VGV",
      rate: "≥ 60%",
      link: "https://youtube.com"
    },
    {
      imgSrc: "/images/Companies/mexc.svg",
      heading: "Mexc",
      type: t("daily"),
      refcode: "157Mn",
      rate: "≥ 50%",
      link: "https://youtube.com"
    },
    {
      imgSrc: "/images/Companies/binance.png",
      heading: "Binance",
      type: t("daily"),
      refcode: "CPA_00ZE5IVVOS",
      rate: "≥ 40%",
      link: "https://youtube.com"
    },
    {
      imgSrc: "/images/Companies/bybit.svg",
      heading: "Bybit",
      type: t("daily"),
      refcode: "YQ4GA",
      rate: "≥ 50%",
      link: "https://youtube.com"
    },
    {
      imgSrc: "/images/Companies/bitget.svg",
      heading: "Bitget",
      type: t("daily"),
      refcode: "5LBE1XD5",
      rate: "≥ 70%",
      link: "https://youtube.com"
    },
    {
      imgSrc: "/images/Companies/coinex.svg",
      heading: "Coinex",
      type: t("daily"),
      refcode: t("comming-soon"),
      rate: t("comming-soon"),
      link: "https://youtube.com"
    },
  ];

  return (
    <div id="exchange" className="pt-20" >
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            {t("how-it-work")}
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            {t("how-it-work-explaind")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {workdata.map((items, i) => (
            <div className="card-b p-8" key={i}>
              <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={100}
                  height={100}
                  className="object-contain h-[30px] w-[100px]"
                />
              </div>
              <div>
                <Image
                  src={"/images/Work/bg-arrow.svg"}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>
              <h3 className="text-2xl text-offwhite font-semibold mt-8">
                {items.heading}
              </h3>
              <div className="flex flex-row justify-between">
                <p className="text-lg text-bluish font-normal text-center ">
                  {t("type")}
                </p>
                <p className="text-lg text-bluish font-normal text-center ">
                  {items.type}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-lg text-bluish font-normal text-center ">
                  {t("ref-code")}
                </p>
                <span
                  className={`text-xs text-bluish text-center ${
                    copied === items.refcode ? "" : "hidden"
                  }`}
                >
                  ({t("copied")}!)
                </span>
                <div
                  className="border p-2 rounded  text-bluish font-normal text-center cursor-pointer flex items-center"
                  onClick={() => handleCopy(items.refcode)}
                >
                  <div>{items.refcode}</div>
                  <div className="ml-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-lg text-bluish font-normal text-center mt-2">
                  {t("cashback-rate")}
                </p>
                <p className="text-lg text-bluish font-normal text-center mt-2">
                  {items.rate}
                </p>
              </div>
              {/* <div className="flex flex-row justify-center">
                <button onClick={()=> open(items.link)} className="text-md font-normal text-bluish hover:text-white py-2 px-2 mt-2  border rounded-md">
                 {t('view-introduction')}
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
