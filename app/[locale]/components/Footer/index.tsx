//eslint-disable
import { useTranslations } from "next-intl";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/Footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/Footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/Footer/youtube.svg", href: "https://youtube.com/" },
];

const Footer = () => {
  const t= useTranslations('Footer');

  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-6">
            <img
              className="block h-12 w-20px mb-4"
              src={"/images/Logo/logo.svg"}
              alt="Crypto-Logo"
            />
          </div>

          {/* COLUMN-2/3 */}
          <div className="col-span-6">
            <h3 className="text-lightblue text-sm font-normal leading-9 ">
              {t('connect-with-us')}
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-8 px-4 border-t border-t-lightblue">
          <h3 className="text-center text-offwhite">
            @2024 - {t('all-rights-reserved-by')} {""}
            <Link href="https://backcom.exchange" target="_blank">
              backcom.exchange
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
