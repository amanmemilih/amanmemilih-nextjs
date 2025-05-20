"use client";

import FooterMobile from '@/core/components/FooterMobile';
import FooterDesktop from '@/core/components/FooterDesktop';
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeroMobile from '@/core/components/HeroMobile';
import HeroDesktop from '@/core/components/HeroDesktop';
import CardInfoMobile from '@/core/components/CardInfoMobile';
import CardInfoDesktop from '@/core/components/CardInfoDesktop';
import InformasiMobile from '@/core/components/InformasiMobile';
import InformasiDesktop from '@/core/components/InformasiDesktop';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    const response = await api.get("/blogs");
    setIsLoading(false);

    setData(response.data.data);
  }

  function truncateText(htmlString, length) {
    // Menghapus semua tag HTML
    const textOnly = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    // Membatasi hingga 20 karakter
    return textOnly.length > length
      ? textOnly.substring(0, length) + "..."
      : textOnly;
  }

  function formatToHumanReadable(dateString) {
    const date = new Date(dateString);

    // Format ke "1 January 2025"
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }

  function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
      const check = () => setIsDesktop(window.innerWidth >= 768);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);
    return isDesktop;
  }

  return (
    <>
      <Navbar />
      {isDesktop ? <HeroDesktop /> : <HeroMobile />}
      {/* Particle.js Background */}
      <div
        id="particles-js"
        className="mt-24 mb-48 absolute inset-0 z-[-1] overflow-hidden opacity-50"
      ></div>
      <div id="tentang"></div>
      {/* ----- SECTION CARD INFO ----- */}
      {isDesktop ? <CardInfoDesktop /> : <CardInfoMobile />}
      {/* ----- SECTION 2 LANGKAH ----- */}
      {/* Header */}
      <div id="cara-kerja"></div>
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-center rounded-md text-center px-4 md:px-8 lg:px-20 py-8 md:py-20 w-full max-w-2xl md:max-w-4xl lg:max-w-6xl">
          <h1 className="leading-normal text-black text-2xl sm:text-3xl md:text-[40px] lg:text-[52px] font-semibold mb-4 w-full">
            2 Langkah agar AmanMemilih
          </h1>
        </div>
      </div>
      {/* Konten */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 lg:space-x-16 gap-6 md:gap-0 w-full max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-2 md:px-4 lg:px-0">
        <div className="flex flex-col items-center w-full md:w-1/2 h-auto p-6 md:p-8 pt-10 md:pt-20 mt-8 md:mt-24 bg-white rounded-lg shadow-2xl shadow-[#FF7272]/10 scale-100 md:scale-105 md:mr-0 lg:mr-12 transition-all duration-300">
          <img
            src="assets/images/undraw_shared_workspace_re_3gsu 1.png"
            alt="Pantau hasil real count"
            className="w-full max-w-[220px] h-32 md:h-40 object-contain"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-6 md:mt-8 text-left w-full">
            Pantau hasil real count
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4">
            Ketahui hasil rekapitulasi suara dari pasangan calon pilihan kamu secara real-time
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 h-auto p-6 md:p-8 bg-white mt-8 md:mt-24 bg-opacity-30 backdrop-blur-md rounded-lg shadow-2xl shadow-[#FF7272]/10 scale-100 md:scale-105 transition-all duration-300">
          <img
            src="assets/images/illustration2.png"
            alt="Pantau hasil real count"
            className="w-32 md:w-48 h-32 md:h-48"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-6 md:mt-10 text-left w-full">
            Laporkan
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4">
            Jika terdapat kesalahan pada hasil rekapitulasi suara, segera laporkan ke Bawaslu setempat.
          </p>
        </div>
      </div>
      {/* ----- SECTION INFORMASI ----- */}
      <div id="teknologi"></div>
      {isDesktop ? <InformasiDesktop /> : <InformasiMobile />}
      {/* ----- SECTION BERITA ----- */}
      <div id="berita"></div>
      {/* Footer */}
      {isDesktop ? <FooterDesktop /> : <FooterMobile />}
    </>
  );
}
