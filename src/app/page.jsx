"use client";

import Footer from "@/core/components/Footer";
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Cards data for carousel
  const cardsData = [
    {
      id: 1,
      title: "AmanRekap",
      description: "Memastikan petugas hanya mengunggah surat suara melalui aplikasi ini yang langsung terhubung ke sistem kami, sehingga masyarakat dapat melihat surat suara setiap daerah di Indonesia.",
      image: "/assets/images/p1.png"
    },
    {
      id: 2,
      title: "AmanHasil",
      description: "Memusatkan segala informasi dari sumber sumber yang kredibel, hal ini juga mencegah kamu mengurangi resiko informasi hoax.",
      image: "/assets/images/p2.png"
    },
    {
      id: 3,
      title: "AmanLapor",
      description: "Tempat pengaduan atau bertanya mengenai proses vote dari setiap VotingRoom. berinteraksi dengan Smartchat, atau guide book.",
      image: "/assets/images/p3.png"
    }
  ];

  // Function to navigate to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next slide
      const nextSlide = currentSlide === cardsData.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right - previous slide
      const prevSlide = currentSlide === 0 ? cardsData.length - 1 : currentSlide - 1;
      setCurrentSlide(prevSlide);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    const response = await api.get("/blogs");
    setIsLoading(false);

    setData(response.data.data);
  }

  useEffect(() => {
    // Dynamically import particles.js and initialize it
    import("particles.js").then(() => {
      if (window.particlesJS) {
        // Desktop particles
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3A3A3A",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3A3A3A",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });

        // Mobile particles with same config
        window.particlesJS("particles-js-mobile", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3A3A3A",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3A3A3A",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    });
  }, []);

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

  return (
    <>
      <Navbar />

      {/* Hero Content */}
      <div className="relative">
        {/* Desktop Hero Section */}
        <div className="hidden md:block container mx-auto pt-8 px-4 mt-[36px]">
          <div className="grid grid-cols-2 gap-8 p-8 place-items-center">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-semibold text-[40px] lg:text-[60px] leading-tight">
                Pemungutan Suara Modern dengan Keamanan Tinggi dan Fleksibilitas
              </h1>
              <p className="font-normal leading-7 text-[20px] mt-12">
                AmanMemilih hadir sebagai solusi dari pengembangan sistem rekapitulasi suara menggunakan teknologi Web 3.0,
                dengan ini hasil rekapitulasi suara tidak bisa dimanipulasi oleh pihak ketiga.
              </p>
              <button
                className="font-semibold text-[20px] bg-[linear-gradient(5deg,_#ffd596_0%,_#ff7272_43%)] text-white px-8 py-4 rounded-lg mt-12 z-10 relative w-fit"
              >
                Unduh Sekarang
              </button>
            </div>
            <div className="items-center">
              <img
                src="assets/images/Illustration.png"
                alt="Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile Hero Section with background image */}
        <div className="block md:hidden">
          <div
            className="h-screen w-full bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: 'url(/assets/images/HeroSectionMobile.png)' }}
          >
            {/* Using BackgroundHero.png as overlay */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/assets/images/BackgroundHero.png)' }}
            ></div>

            {/* Content container with fixed positioning relative to viewport height */}
            <div className="absolute inset-x-0 z-10 px-4">
              {/* Fixed content layout that maintains position across devices */}
              <div className="flex flex-col h-screen">
                {/* Top spacing that ensures content stays in the right spot */}
                <div className="h-[30vh]"></div>

                {/* Fixed content area */}
                <div className="flex-1 flex flex-col justify-center">
                  <h1 className="font-semibold text-[24px] leading-tight text-white">
                    Pemungutan Suara Modern dengan Keamanan Tinggi dan Fleksibilitas
                  </h1>
                  <p className="font-thin leading-7 text-[15px] sm:text-[16px] mt-4 text-white">
                    AmanMemilih hadir sebagai solusi dari pengembangan sistem rekapitulasi suara menggunakan teknologi Web 3.0,
                    dengan ini hasil rekapitulasi suara tidak bisa dimanipulasi oleh pihak ketiga.
                  </p>

                  {/* Button positioned consistently at the bottom with fixed spacing */}
                  <div className="mt-6 sm:mt-8">
                    <button
                      className="font-semibold text-[16px] bg-[linear-gradient(5deg,_#ffd596_0%,_#ff7272_43%)] text-white py-3 rounded-lg w-full"
                    >
                      Unduh Sekarang
                    </button>
                  </div>
                </div>

                {/* Bottom spacing */}
                <div className="h-[15vh]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Particle.js Background - Desktop only */}
        <div id="particles-js" className="hidden md:block absolute inset-0 z-[-1] overflow-hidden opacity-50"></div>
      </div>

      {/* SECTION CARD INFO with Particles.js as background on mobile */}
      <div className="relative">
        {/* Particle.js Background - Mobile only (as background for this section) */}
        <div id="particles-js-mobile" className="block md:hidden absolute inset-0 z-[-1] overflow-hidden opacity-50"></div>

        {/* Card Info Content */}
        <div id="tentang" className="flex flex-col md:flex-row items-center justify-center md:space-x-8 px-4 py-16 md:my-24 md:mb-32">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="text-black text-[32px] md:text-[44px] font-semibold">Aman</span>
            <span className="text-[#FF7272] text-[32px] md:text-[44px] font-semibold">Memilih</span>
          </div>
          <p className="text-gray-700 text-[16px] md:text-lg max-w-4xl text-center md:text-left">
            Aplikasi berbasis teknologi blockchain dengan sistem yang tidak terpusat dan menjamin keamanan data, terutama data
            suara dan data pengguna. Kami menjaga informasi, menjamin integritas data, keamanan, dan mengeliminasi kemungkinan
            bocornya suatu informasi.
          </p>
        </div>
      </div>

      {/* Container Box */}
      <div className="container mx-auto px-4 my-8">
        {/* Desktop version - regular layout */}
        <div className="hidden md:flex flex-row gap-4 justify-between">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-2xl shadow-md shadow-[#FF7272]/20 border-2 border-gray-100 w-full bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF7272]/30"
            >
              <div className="flex flex-col flex-grow px-8 py-12 justify-center">
                <button className="mx-auto py-3 px-6 rounded-full text-black font-bold bg-[#ECECEC] transition-all duration-300 hover:bg-[#FF7272] hover:text-[#FFFFFF]">
                  {card.title}
                </button>
                <p className="my-4 text-center">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-center">
                <img className="w-full max-w-[300px] object-contain" src={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile version - carousel with dots */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            {/* Carousel container with transition styling */}
            <div
              className="relative w-full h-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cardsData.map((card, index) => (
                  <div
                    key={card.id}
                    className={`min-w-full px-2 transition-all duration-500 ease-in-out
              ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
                  >
                    <div className="h-full px-5 py-8 rounded-2xl shadow-md shadow-[#FF7272]/20 border-2 border-gray-100 bg-white transition-all duration-300 active:scale-95">
                      <div className="flex flex-col flex-grow justify-center">
                        <button className="mx-auto py-3 px-6 rounded-full text-black font-bold bg-[#ECECEC] transition-all duration-300 hover:bg-[#FF7272] hover:text-[#FFFFFF]">
                          {card.title}
                        </button>
                        <p className="my-4 text-center text-sm">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <img
                          className="w-full max-w-[220px] object-contain"
                          src={card.image}
                          alt={card.title}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {cardsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index ? 'bg-[#FF7272]' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs mt-3">
              Geser ke kanan atau kiri untuk melihat fitur lainnya
            </p>
          </div>
        </div>
      </div>



      {/* ----- SECTION 2 LANGKAH ----- */}
      {/* Header */}
      <div id="cara-kerja" className="py-8 md:py-16"></div>
      <div className="flex justify-center px-4">
        <div className="flex items-center justify-center rounded-md text-center py-8 md:p-20">
          <h1 className="leading-tight text-black text-[32px] md:text-[52px] font-semibold mb-4">
            2 Langkah agar AmanMemilih
          </h1>
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-col md:flex-row justify-center px-4 md:space-x-16">
        <div className="flex flex-col items-center w-full md:w-96 h-auto p-6 md:p-8 md:pt-20 mt-6 md:mt-24 bg-white rounded-lg shadow-2xl shadow-[#FF7272]/10 md:scale-150 md:mr-48 mb-8 md:mb-0">
          <img
            src="assets/images/undraw_shared_workspace_re_3gsu 1.png"
            alt="Pantau hasil real count"
            className="w-full h-32 md:h-40 object-contain"
          />
          <h2 className="text-xl md:text-2xl font-bold mt-6 md:mt-8 text-center md:text-left w-full">
            Pantau hasil real count
          </h2>
          <p className="text-base text-gray-600 mt-3 md:mt-4 text-center md:text-left">
            Ketahui hasil rekapitulasi suara dari pasangan calon pilihan kamu
            secara real-time
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-96 h-auto p-6 md:p-8 bg-white mt-6 md:mt-24 bg-opacity-30 backdrop-blur-md rounded-lg shadow-2xl shadow-[#FF7272]/10 md:scale-150">
          <img
            src="assets/images/illustration2.png"
            alt="Laporkan"
            className="w-32 h-32 md:w-48 md:h-48"
          />
          <h2 className="text-xl md:text-2xl font-bold mt-6 md:mt-10 text-center md:text-left w-full">
            Laporkan
          </h2>
          <p className="text-base text-gray-600 mt-3 md:mt-4 text-center md:text-left">
            Jika terdapat kesalahan pada hasil rekapitulasi suara, segera
            laporkan ke Bawaslu setempat.
          </p>
        </div>
      </div>

      {/* ----- SECTION INFORMASI ----- */}
      <div id="teknologi" className="py-8 md:py-16"></div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Judul */}
        <div className="flex flex-col items-center justify-start text-center mb-8 md:mb-16">
          <h1 className="text-[28px] md:text-[52px] leading-tight md:leading-[72px] font-semibold text-black mb-4">
            Keamanan dan Kepercayaan adalah yang Utama
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Untuk menjamin demokrasi yang aman dan dapat dipercaya kami
            menggunakan pendekatan sebagai berikut
          </p>
        </div>

        {/* Mobile Cards Layout */}
        <div className="md:hidden space-y-5">
          {/* Biometric Verification Card */}
          <div className="bg-gray-100 rounded-2xl shadow-lg shadow-[#FF7272]/10 border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="mr-4">
                <img
                  src="/assets/images/Group1.png"
                  alt="Biometric Verification"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="text-base font-bold text-black">
                Biometric Verification
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              AmanMemilih menggunakan verifikasi biometrik berupa sidik jari
              atau deteksi wajah yang terkoneksi dengan handphone pengguna
              dengan privasi data yang dipastikan terjaga, untuk memastikan
              pemilihan tidak diwakilkan.
            </p>
          </div>

          {/* IPFS as Decentralize Storage Card */}
          <div className="bg-gray-100 rounded-2xl shadow-lg shadow-[#FF7272]/10 border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="mr-4">
                <img
                  src="/assets/images/Group3.png"
                  alt="IPFS"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="text-base font-bold text-black">
                IPFS as Decentralize Storage
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              IPFS (Interplanetary File Sistem) memungkinkan tidak ada data
              yang bisa dimanipulasi dan dipastikan semua data tidak mengalami
              kerusakan. Bahkan AmanMemilih tidak dapat memodifikasi data yang
              ada.
            </p>
          </div>

          {/* Secure Hash Algorithm Card */}
          <div className="bg-gray-100 rounded-2xl shadow-lg shadow-[#FF7272]/10 border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="mr-4">
                <img
                  src="/assets/images/Group2.png"
                  alt="Secure Hash"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="text-base font-bold text-black">
                Secure Hash Algorithm
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              Sebelum data dikirim ke blockchain, data akan terlebih dahulu di
              hashing dengan SHA-256, walaupun data dapat diakses secara
              publik, tetap tidak ada yang tahu isi data tersebut kecuali
              disamakan dengan data aslinya.
            </p>
          </div>

          {/* Blockchain as Decentralize DB Card */}
          <div className="bg-gray-100 rounded-2xl shadow-lg shadow-[#FF7272]/10 border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="mr-4">
                <img
                  src="/assets/images/Group4.png"
                  alt="Blockchain"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h2 className="text-base font-bold text-black">
                Blockchain as Decentralize DB
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              Blockchain adalah solusi untuk melindungi data tersebut, dengan
              transaksi yang satu arah, memiliki nilai ID yang unik, dan
              ledger yang dapat diakses siapa saja. Data voting akan tetap
              orisinal, rahasia dan transparan.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Biometric Verification */}
          <div className="flex flex-col md:flex-row items-center md:items-start m-2 md:m-5">
            <img
              src="assets/images/Group1.png"
              alt="Biometric Verification"
              className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-black mb-2">
                Biometric Verification
              </h2>
              <p className="text-gray-800">
                AmanMemilih menggunakan verifikasi biometrik berupa sidik jari
                atau deteksi wajah yang terkoneksi dengan handphone pengguna
                dengan privasi data yang dipastikan terjaga, untuk memastikan
                pemilihan tidak diwakilkan.
              </p>
            </div>
          </div>

          {/* IPFS as Decentralize Storage */}
          <div className="flex flex-col md:flex-row items-center md:items-start m-2 md:m-5">
            <img
              src="assets/images/Group3.png"
              alt="IPFS"
              className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-black mb-2">
                IPFS as Decentralize Storage
              </h2>
              <p className="text-gray-800">
                IPFS (Interplanetary File Sistem) memungkinkan tidak ada data
                yang bisa dimanipulasi dan dipastikan semua data tidak mengalami
                kerusakan. Bahkan AmanMemilih tidak dapat memodifikasi data yang
                ada.
              </p>
            </div>
          </div>

          {/* Secure Hash Algorithm */}
          <div className="flex flex-col md:flex-row items-center md:items-start m-2 md:m-5">
            <img
              src="assets/images/Group2.png"
              alt="Secure Hash"
              className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-black mb-2">
                Secure Hash Algorithm
              </h2>
              <p className="text-gray-800">
                Sebelum data dikirim ke blockchain, data akan terlebih dahulu di
                hashing dengan SHA-256, walaupun data dapat diakses secara
                publik, tetap tidak ada yang tahu isi data tersebut kecuali
                disamakan dengan data aslinya.
              </p>
            </div>
          </div>

          {/* Blockchain as Decentralize DB */}
          <div className="flex flex-col md:flex-row items-center md:items-start m-2 md:m-5">
            <img
              src="assets/images/Group4.png"
              alt="Blockchain"
              className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-black mb-2">
                Blockchain as Decentralize DB
              </h2>
              <p className="text-gray-800">
                Blockchain adalah solusi untuk melindungi data tersebut, dengan
                transaksi yang satu arah, memiliki nilai ID yang unik, dan
                ledger yang dapat diakses siapa saja. Data voting akan tetap
                orisinal, rahasia dan transparan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----- SECTION BERITA ----- */}
      <div id="berita" className="py-8 md:py-16"></div>
      <div className="flex justify-center px-4">
        <div className="flex items-center justify-center rounded-md text-center py-6 md:p-12">
          <h1 className="leading-normal text-black text-3xl md:text-5xl font-semibold">
            Berita
          </h1>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF7272]"></div>
        </div>
      ) : (
        <>
          {/* Mobile view - 2 column grid with updated card layout */}
          <div className="md:hidden grid grid-cols-2 gap-3 px-4 my-4">
            {data?.slice(0, 4).map((row) => (
              <Link
                href={"/berita/" + row.id}
                key={row.id}
                className="rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
              >
                {/* Image container with fixed height */}
                <div className="relative w-full h-24">
                  <img
                    className="w-full h-full object-cover"
                    src={row.thumbnail}
                    alt={row.title}
                    loading="lazy"
                  />
                </div>

                {/* Content container */}
                <div className="p-2 flex flex-col flex-grow">
                  {/* Title with controlled font size */}
                  <h3
                    className="font-medium text-xs leading-tight mb-1 line-clamp-2 h-8"
                    style={{ fontFamily: '"Alata"' }}
                  >
                    {truncateText(row.title, 40)}
                  </h3>

                  {/* Short excerpt from article - only shown if space allows */}
                  <p className="text-gray-500 text-[10px] line-clamp-1 mb-1">
                    {truncateText(row.body, 30)}
                  </p>

                  {/* Author and date row at bottom */}
                  <div className="flex justify-between items-center text-[9px] text-gray-500 mt-auto pt-1 border-t border-gray-100">
                    <span className="flex items-center">
                      <span>~Admin</span>
                    </span>
                    <time className="opacity-70">
                      {formatToHumanReadable(row.created_at).split(' ').slice(0, 2).join(' ')}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop view - original layout */}
          <div className="hidden md:flex md:flex-row justify-center gap-6 md:space-x-8 my-6 px-4">
            {data?.slice(0, 3).map((row) => (
              <Link
                href={"/berita/" + row.id}
                key={row.id}
                className="max-w-sm rounded overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-52 object-cover"
                  src={row.thumbnail}
                  alt={row.title}
                />
                <div className="px-4 py-4">
                  <div
                    className="font-normal text-lg md:text-[20px] mb-2"
                    style={{ fontFamily: '"Alata"' }}
                  >
                    {truncateText(row.title, 30)}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base opacity-90">
                    {truncateText(row.body, 100)}
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 px-4 py-4">
                  <span className="flex items-center">
                    <span className="mr-2">~Admin</span>
                  </span>
                  <time className="opacity-50">
                    {formatToHumanReadable(row.created_at)}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
