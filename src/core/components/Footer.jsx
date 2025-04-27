import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      {/* Mobile Footer */}
      <div className="md:hidden">
        <div className="text-center px-4 mb-8">
          <p className="font-medium text-xl bg-gradient-to-r from-[#FFB84E] from-[0%] via-[#FF8787] via-[63%] to-[#FF7272] to-[100%] text-transparent bg-clip-text mb-4">
            Pantau, Laporkan, Aman.
          </p>
          <div>
            <span className="text-black text-[28px] font-semibold">Aman</span>
            <span className="text-[#FF7272] text-[28px] font-semibold">Memilih</span>
          </div>
        </div>

        {/* Mobile Footer Row Layout - Logo left, social right */}
        <div className="container mx-auto px-4">
          <div className="flex flex-row justify-between items-start">
            {/* Left section - Logo and text */}
            <div className="flex flex-col">
              <img
                src="/assets/images/FooterMobile2.png"
                alt="Logo"
                className="h-10 w-20 mb-6"
              />
              <p className="text-[12px] text-[#A6A6A6] mb-1">
                Prototype by AmanMemilih
              </p>
              <p className="text-[10px] text-[#A6A6A6]">
                Disclaimer | Privacy Policy
              </p>
            </div>

            {/* Right section - Social media */}
            <div className="flex flex-col items-end">
              <p className="text-[12px] text-gray-500 mb-2 text-right">
                Connect With Us
              </p>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center justify-center">
                  <img
                    src="/assets/images/logo_facebook.png"
                    alt="Facebook"
                    className="h-[20px] w-auto"
                  />
                </a>
                <a href="#" className="flex items-center justify-center">
                  <img
                    src="/assets/images/logo_ig.png"
                    alt="Instagram"
                    className="h-[24px] w-auto"
                  />
                </a>
                <a href="#" className="flex items-center justify-center">
                  <img
                    src="/assets/images/logo_x.png"
                    alt="X"
                    className="h-[20px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="max-w-screen-xl mx-auto text-center mb-5 mt-16">
          <p className="text-[52px] font-medium bg-gradient-to-r from-[#FFB84E] from-[0%] via-[#FF8787] via-[63%] to-[#FF7272] to-[100%] text-transparent bg-clip-text mb-5">
            Pantau, Laporkan, Aman.
          </p>
          <span className="text-black text-[44px] font-semibold">Aman</span>
          <span className="text-[#FF7272] text-[44px] font-semibold">Memilih</span>
        </div>

        <div className="container mx-auto flex flex-row justify-between items-start md:items-center mt-14 py-5">
          <div>
            <div className="flex justify-left items-center space-x-4">
              <Link href="/">
                <img
                  src="/assets/images/logoam.png"
                  alt="Logo"
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <div className="pt-4 text-left">
              <p className="text-[18px] text-[#A6A6A6]">
                Designed by AmanMemilih
              </p>
              <p className="text-[16px] leading-[32px] text-[#A6A6A6]">
                Disclaimer | Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end md:items-end mt-6 md:mt-20 space-y-1">
            <p className="text-[18px] text-gray-500 text-center">
              Connect With Us
            </p>
            <div className="flex space-x-2">
              <a
                href="#"
                className="w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-300"
              >
                <img
                  src="/assets/images/logo_facebook.png"
                  alt="Facebook"
                  className="h-[24px] w-auto"
                />
              </a>
              <a
                href="#"
                className="w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-300"
              >
                <img
                  src="/assets/images/logo_ig.png"
                  alt="Instagram"
                  className="h-[28px] w-auto"
                />
              </a>
              <a
                href="#"
                className="w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-300"
              >
                <img
                  src="/assets/images/logo_x.png"
                  alt="X"
                  className="h-[28px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
