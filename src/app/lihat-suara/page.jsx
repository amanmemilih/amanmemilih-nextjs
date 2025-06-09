"use client";

import FooterDesktop from "@/core/components/FooterDesktop";
import FooterMobile from "@/core/components/FooterMobile";
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Script from "next/script";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const [candidatSummary, setCandidatSummary] = useState([]);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState(null);
  const [subdistrict, setSubdistrict] = useState(null);
  const [village, setVillage] = useState(null);
  const [tps, setTPS] = useState(null);
  const [documentID, selectedDocumentID] = useState(null);
  const [electionType, setElectionType] = useState("presidential");

  useEffect(() => {
    fetchCandidatSummary();
    fetchProvince();
  }, []);

  // Inisialisasi particles.js setelah komponen mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#3A3A3A" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
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
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  async function fetchCandidatSummary() {
    setIsLoading(true);
    const response = await api.get("/presidential-candidats/summary");
    setIsLoading(false);

    setCandidatSummary(response.data.data);
  }

  async function fetchProvince() {
    setIsSearchLoading(true);
    const response = await api.get("/bps/province");
    setIsSearchLoading(false);

    setProvince(response.data.data);
  }

  async function handleProvince(e) {
    setIsSearchLoading(true);
    const response = await api.get("/bps/district/" + e.target.value);
    setIsSearchLoading(false);
    console.log("OK", response);
    setDistrict(response.data.data);
    setSubdistrict(null);
    setVillage(null);
    setTPS(null);
    selectedDocumentID(null);
  }

  async function handleDistrict(e) {
    setIsSearchLoading(true);
    const response = await api.get("/bps/subdistrict/" + e.target.value);
    setIsSearchLoading(false);

    setSubdistrict(response.data.data);
    setVillage(null);
    setTPS(null);
    selectedDocumentID(null);
  }

  async function handleSubdistrict(e) {
    setIsSearchLoading(true);
    const response = await api.get("/bps/village/" + e.target.value);
    setIsSearchLoading(false);

    setVillage(response.data.data);
    setTPS(null);
    selectedDocumentID(null);
  }

  async function handleVillage(e) {
    setIsSearchLoading(true);
    const response = await api.get(
      "/bps/tps/" + e.target.value + "?election_type=" + electionType
    );
    setIsSearchLoading(false);

    setTPS(response.data.data);
    selectedDocumentID(null);
  }

  async function handleElectionType(e) {
    setElectionType(e.target.value);
    setTPS(null);
    selectedDocumentID(null);
  }

  function handleSearch() {
    if (documentID == null || documentID == "") return;

    router.push(`/hasil/${documentID}/${electionType}`);
  }

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="beforeInteractive" />
      <Navbar />
      {/* Particle.js Background - Only for Hero Section */}
      <div className="relative">
        <div id="particles-js" className="absolute inset-0 z-0 overflow-hidden opacity-60 pointer-events-none select-none w-full h-full" />
        {/* Hero Section */}
        <main className="relative max-w-screen-md mx-auto px-2 md:px-4 py-8 md:py-16 text-center mt-[80px] z-10">
          <h1 className="text-[28px] md:text-[44px] leading-tight md:leading-[56px] font-semibold text-black mb-2 md:mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Pantau real count Presiden<br className="hidden md:block" />
            dan Wakil Presiden
          </h1>
          {/* <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-10" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Terakhir diperbarui pada jam 14:06 WIB
          </p> */}
          {/* Paslon Percentage Section - Desktop */}
          <div className="hidden md:flex flex-row gap-8 w-full justify-center mt-8">
            {((!isLoading && candidatSummary.length === 0)
              ? [
                { no: 1, name: 'Anies & Cak Imin', image: '/assets/images/paslon1.png', vote_percentage: 0 },
                { no: 2, name: 'Prabowo & Gibran', image: '/assets/images/paslon2.png', vote_percentage: 0 },
                { no: 3, name: 'Ganjar & Mahfud', image: '/assets/images/paslon3.png', vote_percentage: 0 },
              ]
              : candidatSummary
            ).map((row) => (
              <div
                key={row.no}
                className="flex flex-col items-center bg-white rounded-[20px] border border-[#F2F2F2] shadow-lg w-[600px] max-w-[640px] min-h-[420px] px-0 pt-0 pb-8 relative transition-all duration-300 hover:scale-105"
              >
                {/* Foto Kandidat dengan background gradasi, gambar benar-benar nempel ke bawah dan nomor urut di atas gambar */}
                <div className="w-full h-[220px] rounded-t-[20px] flex items-end justify-center bg-gradient-to-b from-[#FFB084] to-[#FF7272] relative overflow-visible p-0">
                  {/* Nomor urut bulat di atas gambar, menempel di bawah gradasi dan di atas area putih */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-36px] z-50">
                    <div className="w-16 h-16 rounded-full bg-[#FF7272] flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-2xl">
                      {row.no}
                    </div>
                  </div>
                  <img
                    src={row.image}
                    alt={`Kandidat ${row.no}`}
                    className="w-full h-[220px] object-contain drop-shadow-xl mx-auto mb-[-8px] z-10"
                    style={{ maxWidth: '100%', objectPosition: 'bottom' }}
                  />
                </div>
                {/* Nama Paslon & Persentase */}
                <div className="flex flex-col items-center justify-center mt-16 px-4 w-full min-h-[120px]">
                  <span className="block text-2xl font-semibold text-[#222] mb-2 text-center leading-tight whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: 'Plus Jakarta Sans' }}>{row.name}</span>
                  <span className="block text-5xl font-bold text-[#222] mt-2 text-center whitespace-nowrap" style={{ fontFamily: 'Plus Jakarta Sans' }}>{parseFloat(row.vote_percentage).toFixed(1).replace('.', ',')}%</span>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile version tetap pakai flex-col seperti sebelumnya */}
          <div className="flex flex-col gap-2 md:hidden w-full">
            {isLoading
              ? ""
              : candidatSummary.map((row) => (
                <div
                  key={row.no}
                  className="flex flex-row items-center justify-between bg-white bg-opacity-90 rounded-2xl shadow border border-gray-100 px-3 py-2 w-full min-h-[100px]"
                >
                  {/* Nomor Kandidat */}
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FF7272] text-white rounded-full flex items-center justify-center font-semibold text-base mr-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {row.no}
                  </div>
                  {/* Foto Kandidat */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white mr-2 flex items-center justify-center">
                    <img
                      src={row.image}
                      alt={`Kandidat ${row.no}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Nama & Persentase */}
                  <div className="flex-1 flex flex-row items-center justify-between">
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans' }}>{row.name}</span>
                    <span className="text-base font-bold text-gray-900 ml-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                      {parseFloat(row.vote_percentage).toFixed(1).replace('.', ',')}%
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
      {/* End Hero Section with Particles.js */}

      {/* Form Section */}
      <div className="w-full max-w-full mx-auto px-2 md:px-4 py-8 md:py-16 text-center">
        <h1
          className="text-[24px] md:text-[40px] font-bold mb-6 md:mb-8 relative z-10"
          style={{ fontFamily: '"Plus Jakarta Sans"' }}
        >
          Cari berdasarkan daerah anda
        </h1>
        <div className="w-full max-w-md md:max-w-6xl mx-auto px-2 md:px-[40px] py-6 md:py-[52px] bg-white rounded-2xl shadow-2xl shadow-[#FF7272]/10 border border-[#FFECEC]">
          {/* Form Row Pertama */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-7">
            {/* Pilih Provinsi */}
            <div className="flex-1">
              <select
                className="w-full p-3 text-sm md:text-base border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                onChange={handleElectionType}
                value={electionType}
              >
                <option value="presidential">PILPLRES</option>
                <option value="dpr">PILEG DPR</option>
                <option value="dprd_province">PILEG DPRD PROVINSI</option>
                <option value="dprd_district">PILEG DPRD KAB/KOTA</option>
                <option value="dpd">PEMILU DPD</option>
              </select>
            </div>
            {/* Pilih Provinsi */}
            <div className="flex-1">
              <select
                className="w-full p-3 text-sm md:text-base border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                onChange={handleProvince}
              >
                <option>Pilih Provinsi</option>
                {province.map((row) => (
                  <option key={row.id} value={row.id}>
                    {row.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Form Row Kedua */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-7">
            {/* Pilih Kota/Kabupaten */}
            <div className="flex-1">
              <select
                className="w-full p-3 text-sm md:text-base border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                disabled={district == null}
                onChange={handleDistrict}
              >
                <option>Pilih Kota/Kabupaten</option>
                {district
                  ? district.map((row) => (
                    <option key={row.id} value={row.id}>
                      {row.name}
                    </option>
                  ))
                  : ""}
              </select>
            </div>
            {/* Pilih Kelurahan */}
            <div className="flex-1">
              <select
                className="w-full p-3 text-sm md:text-base border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                disabled={subdistrict == null}
                onChange={handleSubdistrict}
              >
                <option>Pilih Kelurahan</option>
                {subdistrict
                  ? subdistrict.map((row) => (
                    <option key={row.id} value={row.id}>
                      {row.name}
                    </option>
                  ))
                  : ""}
              </select>
            </div>
          </div>
          {/* Form Row Ketiga */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Pilih Kecamatan */}
            <div className="flex-1 w-full">
              <select
                className="w-full p-3 text-sm md:text-base border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                onChange={handleVillage}
                disabled={village == null}
              >
                <option>Pilih Kecamatan</option>
                {village
                  ? village.map((row) => (
                    <option key={row.id} value={row.id}>
                      {row.name}
                    </option>
                  ))
                  : ""}
              </select>
            </div>
            {/* Pilih TPS */}
            <div className="flex-1 w-full">
              <select
                className="w-full p-3 text-sm md:text-base border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                disabled={tps == null}
                onChange={(e) => {
                  selectedDocumentID(e.target.value);
                }}
              >
                <option value="">Pilih TPS</option>
                {tps
                  ? tps.map((row) => (
                    <option key={row.id} value={row.id}>
                      {row.name}
                    </option>
                  ))
                  : ""}
              </select>
            </div>
            {/* Tombol Cari */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <div
                onClick={handleSearch}
                className={`w-full md:w-auto px-0 md:px-16 py-3 text-base md:text-lg rounded-3xl text-white ${documentID == null || documentID == ""
                  ? "bg-red-200"
                  : "bg-[#FF7272] hover:bg-red-500 cursor-pointer"
                  } transition-all duration-300  hover:text-white hover:border hover:border-gray-300`}
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
              >
                Cari
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Footer */}
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </>
  );
};

export default Page;
