import React from "react";
import Image from "next/image";
import logo from "@/asset/wik-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-35">
          {/* Logo (left) */}
          <Image
            src={logo}
            width={130}
            height={120}
            alt="Picture of the author"
          />

          {/* Center link */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#"
              className="text-[#0D4021] text-xl font-bold hover:text-gray-200"
            >
              Pilot Project Change Information
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
