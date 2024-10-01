import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto py-6 flex justify-between items-center">
      <a href="/" className="">
        <Image src="/logo.png" alt="logo" width={49} height={94} />
      </a>

      <div className="flex gap-40">
        <div className="flex gap-10 items-center">
          <a href="/" className="">
            HOME
          </a>
          <a href="/" className="">
            FEATURES
          </a>
          <a href="/" className="">
            SHOP
          </a>
          <a href="/" className="">
            SERVICES
          </a>
          <a href="/" className="">
            CONTACT
          </a>
        </div>

        <div className="flex gap-10 items-center">
          <a href="/">
            <BriefcaseBusiness />
          </a>
          <button className="px-6 py-1  border-2 border-[#224f34] rounded-md ">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
