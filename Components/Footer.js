import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto text-white">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-8">
          <a href="/">
            <Image
              src="/footerLogo.png"
              alt="inverted"
              width={115}
              height={28}
              className="w-20"
            />
          </a>
          <div className="flex flex-col gap-2">
            <h1>Social Media</h1>
            <div className="flex gap-4 text-[#C2EFD4]">
              <a href="/">
                <Facebook size={24} />
              </a>
              <a href="/">
                <Twitter size={24} />
              </a>
              <a href="/">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-4 font-normal text-[#C2EFD4]">
          <li className="font-bold text-white text-xl">
            <a href="/">SHOP</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Overview</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Releases</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 font-normal text-[#C2EFD4]">
          <li className="font-bold text-white text-xl">
            <a href="/">COMPANY</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold text-xl">STAY UP TO DATE</h1>
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-2 border-[#A3F3BE] placeholder-white text-sm p-2 outline-none "
            />
            <button className=" bg-[#A3F3BE] text-[#224F34] font-semibold p-2">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24 flex items-center gap-6">
        <div className="h-[2px] w-full bg-primary "></div>
        <div className="flex gap-6 text-white">
          <a href="/" className="">
            Privacy
          </a>
          <a href="/" className="">
            Terms
          </a>
          <a href="/" className="">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
