"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <header className="bg-white fixed top-0 left-0 w-full z-50 border-b border-gray-200">
        <div className="mx-auto px-4 py-3 flex items-center justify-between md:pl-32 md:pr-32 md:py-6">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/assets/images/logoam.png"
                alt="Logo"
                className="h-10 md:h-14 w-auto"
              />
            </Link>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-base">
            <Link
              href={`${pathName != "/" ? "/" : ""}#tentang`}
              className="text-base text-gray-800 px-2 py-2.5 hover:text-[#FF7272]"
            >
              Tentang
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#cara-kerja`}
              className="text-base text-gray-800 px-2 py-2.5 hover:text-[#FF7272]"
            >
              Cara Kerja
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#teknologi`}
              className="text-base text-gray-800 px-2 py-2.5 hover:text-[#FF7272]"
            >
              Teknologi
            </Link>
            <Link
              href={`${pathName != "/" ? "/" : ""}#berita`}
              className="text-base text-gray-800 px-4 py-2.5 hover:text-[#FF7272]"
            >
              Berita
            </Link>
            <Link
              href="/lihat-suara"
              className="text-base px-6 py-2.5 rounded-xl text-white bg-[#FF7272] transition-all duration-300 hover:bg-[#FF5252] hover:text-white"
            >
              Lihat Suara
            </Link>
          </nav>
          {/* Hamburger Mobile */}
          <button className="md:hidden flex items-center justify-center w-10 h-10" onClick={() => setOpen(!open)} aria-label="Menu">
            <Bars3Icon className="h-7 w-7 text-black" />
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 px-6 pt-6 pb-8 z-40">
            <div className="flex flex-col space-y-8 text-base font-medium text-gray-900">
              <Link href={`${pathName != "/" ? "/" : ""}#tentang`} className="flex items-center gap-2 text-base" onClick={() => setOpen(false)}>Tentang <span>↗</span></Link>
              <Link href={`${pathName != "/" ? "/" : ""}#cara-kerja`} className="flex items-center gap-2 text-base" onClick={() => setOpen(false)}>Cara Kerja <span>↗</span></Link>
              <Link href={`${pathName != "/" ? "/" : ""}#teknologi`} className="flex items-center gap-2 text-base" onClick={() => setOpen(false)}>Teknologi <span>↗</span></Link>
              <Link href={`${pathName != "/" ? "/" : ""}#berita`} className="flex items-center gap-2 text-base" onClick={() => setOpen(false)}>Berita <span>↗</span></Link>
            </div>
            <Link href="/lihat-suara" className="block w-[118px] h-[42px] mt-8 text-center rounded-xl text-white bg-[#FF7272] text-base font-semibold flex items-center justify-center" onClick={() => setOpen(false)}>
              Lihat Suara
            </Link>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
