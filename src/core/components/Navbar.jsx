"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <header className="bg-white fixed top-0 left-0 w-full z-50">
        <div className=" mx-auto pl-32 pr-32 px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/assets/images/logoam.png"
                alt="Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <nav className="flex space-x-6">
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
          </nav>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
