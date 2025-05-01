"use client";

import Footer from "@/core/components/Footer";
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Script from "next/script"; // Import Script from next/script

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

    // Initialize particles directly in useEffect to ensure DOM is ready
    const initParticles = () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        console.log("Initializing particles.js");
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 }
            },
            color: { value: '#3A3A3A' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.5,
              random: false
            },
            size: {
              value: 3,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#3A3A3A',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out'
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            }
          },
          retina_detect: true
        });
      }
    };

    // Try to initialize after a short delay to ensure the script is loaded
    if (window.particlesJS) {
      initParticles();
    } else {
      // If particlesJS is not immediately available, wait for the script to load
      const timer = setTimeout(initParticles, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Function to handle script load
  function handleParticlesLoad() {
    console.log("particles.js script loaded");
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 }
          },
          color: { value: '#3A3A3A' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#3A3A3A',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }

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
      <Navbar />

      {/* Load particles.js library */}
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="afterInteractive"
        onLoad={handleParticlesLoad}
      />

      <div className="bg-gradient-to-b from-white to-white relative">
        {/* Particle.js Background */}
        <div
          id="particles-js"
          className="absolute inset-0 z-0"
          style={{ height: '100%', width: '100%' }}
        ></div>

        {/* Hero Section */}
        <main className="relative max-w-screen-lg mx-auto px-4 py-8 md:py-16 text-center mt-[80px] z-10">
          <div className="flex flex-col items-center justify-start text-center mb-10 md:mb-24">
            <div className="flex flex-col max-w-[800px] p-4">
              <h1 className="text-[24px] md:text-[52px] leading-[38px] md:leading-[72px] font-semibold text-black mb-4">
                Pantau hasil real count Presiden dan Wakil Presiden
              </h1>
            </div>
          </div>

          {/* Desktop Paslon Percentage Section */}
          <div className="hidden md:flex justify-center gap-6 mt-10 px-4 relative z-10">
            {isLoading
              ? <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF7272]"></div>
              </div>
              : candidatSummary.map((row) => (
                <div
                  key={row.no}
                  className="relative z-10 backdrop-blur-md bg-[#3A3A3A]/5 rounded-lg overflow-hidden w-[380px] h-[350px] text-center"
                >
                  {/* Nomor Kandidat */}
                  <div
                    className="absolute top-[150px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#FF7272] text-white rounded-full flex items-center justify-center font-semibold text-[28px] z-10"
                    style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  >
                    {row.no}
                  </div>
                  {/* Foto Kandidat */}
                  <div className="h-[174px] flex justify-center items-center">
                    <img
                      src={row.image}
                      alt={`Kandidat ${row.no}`}
                      className="h-auto w-auto max-w-full max-h-full mt-4"
                    />
                  </div>
                  {/* Nama dan Persentase */}
                  <div className="p-4">
                    <h3
                      className="max-w-full mt-8 whitespace-nowrap text-[28px] font-medium text-gray-800"
                      style={{ fontFamily: '"Plus Jakarta Sans"' }}
                    >
                      {row.name}
                    </h3>
                    <p
                      className="text-[42px] font-semibold mt-2 text-gray-900"
                      style={{ fontFamily: '"Plus Jakarta Sans"' }}
                    >
                      {parseFloat(row.vote_percentage).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Mobile Paslon Percentage Section */}
          <div className="flex md:hidden flex-col w-full gap-3 mt-2 relative z-10">
            {isLoading
              ? <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#FF7272]"></div>
              </div>
              : candidatSummary.map((row) => (
                <div
                  key={row.no}
                  className="flex flex-row items-center backdrop-blur-md bg-[#3A3A3A]/5 rounded-lg overflow-hidden w-full py-3 px-4"
                >
                  {/* Nomor Kandidat */}
                  <div
                    className="w-8 h-8 bg-[#FF7272] text-white rounded-full flex items-center justify-center font-semibold text-[16px] mr-3"
                    style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  >
                    {row.no}
                  </div>

                  {/* Foto Kandidat */}
                  <div className="flex-shrink-0 h-[50px] w-[50px] mr-3">
                    <img
                      src={row.image}
                      alt={`Kandidat ${row.no}`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Nama */}
                  <div className="flex flex-col items-start flex-grow text-left mr-1 max-w-[40%]">
                    <h3
                      className="text-[14px] font-normal text-gray-800 line-clamp-2"
                      style={{ fontFamily: '"Plus Jakarta Sans"' }}
                    >
                      {row.name}
                    </h3>
                  </div>

                  {/* Persentase */}
                  <div className="flex-shrink-0 ml-auto">
                    <p
                      className="text-[14px] font-semibold text-gray-900"
                      style={{ fontFamily: '"Plus Jakarta Sans"' }}
                    >
                      {parseFloat(row.vote_percentage).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>

      {/* Form Section - Clean white background without particles */}
      <div className="max-w-screen-full mx-auto px-4 py-8 md:py-16 text-center bg-white">
        <h1
          className="text-[26px] md:text-[40px] font-bold mb-6 md:mb-8 relative z-10"
          style={{ fontFamily: '"Plus Jakarta Sans"' }}
        >
          Cari berdasarkan daerah anda
        </h1>

        {/* Desktop Form */}
        <div className="hidden md:block w-full max-w-6xl mx-auto px-[40px] py-[52px] bg-white rounded-2xl shadow-2xl shadow-[#FF7272]/10 border border-[#FFECEC]">
          {/* Form Row Pertama */}
          <div className="flex flex-wrap gap-4 mb-7">
            {/* Pilih Provinsi */}
            <div className="flex-1 mr-2">
              <select
                className="w-full p-3 border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div className="flex-1 mr-2">
              <select
                className="w-full p-3 border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
          <div className="flex flex-wrap gap-4 mb-7">
            {/* Pilih Kota/Kabupaten */}
            <div className="flex-1">
              <select
                className="w-full p-3 border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div className="flex-1 mr-2">
              <select
                className="w-full p-3 border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
          <div className="flex flex-wrap gap-4 items-center">
            {/* Pilih Kecamatan */}
            <div className="flex-1">
              <select
                className="w-full p-3 border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div className="flex-1 mr-2">
              <select
                className="w-full p-3 border border-gray-250 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div>
              <div
                onClick={handleSearch}
                className={`px-16 py-3 text-lg rounded-3xl text-white ${documentID == null || documentID == ""
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

        {/* Mobile Form */}
        <div className="md:hidden w-full max-w-xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-lg shadow-[#FF7272]/10 border border-[#FFECEC]">
          <div className="flex flex-col space-y-4">
            {/* Tipe Pemilihan */}
            <div className="w-full">
              <select
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                onChange={handleElectionType}
                value={electionType}
              >
                <option value="presidential">PILPRES</option>
                <option value="dpr">PILEG DPR</option>
                <option value="dprd_province">PILEG DPRD PROVINSI</option>
                <option value="dprd_district">PILEG DPRD KAB/KOTA</option>
                <option value="dpd">PEMILU DPD</option>
              </select>
            </div>

            {/* Pilih Provinsi */}
            <div className="w-full">
              <select
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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

            {/* Pilih Kota/Kabupaten */}
            <div className="w-full">
              <select
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div className="w-full">
              <select
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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

            {/* Pilih Kecamatan */}
            <div className="w-full">
              <select
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div className="w-full">
              <select
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#ABABAB]"
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
            <div className="w-full mt-4">
              <button
                onClick={handleSearch}
                className={`w-full py-3 text-base rounded-xl text-white ${documentID == null || documentID == ""
                  ? "bg-red-200"
                  : "bg-[#FF7272] hover:bg-red-500 cursor-pointer"
                  } transition-all duration-300`}
                style={{ fontFamily: '"Plus Jakarta Sans"' }}
                disabled={documentID == null || documentID == ""}
              >
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;