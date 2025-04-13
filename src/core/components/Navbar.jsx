"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <header className="bg-white fixed top-0 left-0 w-full z-50">
        <div className="mx-auto px-4 py-6 flex items-center justify-between md:px-8 lg:px-32">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/assets/images/logoam.png"
                alt="Logo"
                className="h-10 w-auto md:h-14"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href={`${pathName != "/" ? "/" : ""}#tentang`}
              className="text-lg text-gray-800 px-2 py-2.5 hover:text-[#FF7272]"
            >
              Tentang
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#cara-kerja`}
              className="text-lg text-gray-800 px-2 py-2.5 hover:text-[#FF7272]"
            >
              Cara Kerja
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#teknologi`}
              className="text-lg text-gray-800 px-2 py-2.5 hover:text-[#FF7272]"
            >
              Teknologi
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#berita`}
              className="text-lg text-gray-800 px-4 py-2.5 hover:text-[#FF7272]"
            >
              Berita
            </Link>
            <Link
              href="/lihat-suara"
              className="text-lg px-6 py-2.5 rounded-xl text-white bg-[#FF7272] transition-all duration-300 hover:bg-[#FF5252] hover:text-white"
            >
              Lihat Suara
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`absolute top-0 left-0 w-full h-screen bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="flex justify-between items-center p-6">
            <Link href="/">
              <img
                src="/assets/images/logoam.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col px-6 py-8 space-y-4">
            <Link
              href={`${pathName != "/" ? "/" : ""}#tentang`}
              className="text-lg text-gray-800 py-2 hover:text-[#FF7272]"
              onClick={toggleMenu}
            >
              Tentang
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#cara-kerja`}
              className="text-lg text-gray-800 py-2 hover:text-[#FF7272]"
              onClick={toggleMenu}
            >
              Cara Kerja
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#teknologi`}
              className="text-lg text-gray-800 py-2 hover:text-[#FF7272]"
              onClick={toggleMenu}
            >
              Teknologi
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#berita`}
              className="text-lg text-gray-800 py-2 hover:text-[#FF7272]"
              onClick={toggleMenu}
            >
              Berita
            </Link>
            <Link
              href="/lihat-suara"
              className="text-lg px-6 py-2.5 mt-4 rounded-xl text-white bg-[#FF7272] inline-block w-fit"
              onClick={toggleMenu}
            >
              Lihat Suara
            </Link>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
