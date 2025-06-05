"use client";

import Footer from "@/core/components/Footer";
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
      <Navbar />
      {/* Particle.js Background (pakai SVG statis) */}
      <div className="absolute inset-0 z-0 overflow-hidden mt-0 opacity-60 pointer-events-none select-none">
        <img src="/assets/images/particle.svg" alt="Particles" className="w-full h-full object-cover" />
      </div>
      {/* Hero Section */}
      <main className="relative max-w-screen-md mx-auto px-2 md:px-4 py-8 md:py-16 text-center mt-[80px] z-10">
        <h1 className="text-[28px] md:text-[44px] leading-tight md:leading-[56px] font-semibold text-black mb-2 md:mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Pantau real count Presiden<br className="hidden md:block" />
          dan Wakil Presiden
        </h1>
        <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-10" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Terakhir diperbarui pada jam 14:06 WIB
        </p>
        {/* Paslon Percentage Section */}
        <div className="flex flex-col gap-2 md:gap-4 w-full">
          {isLoading
            ? ""
            : candidatSummary.map((row) => (
              <div
                key={row.no}
                className="flex flex-row items-center justify-between bg-white bg-opacity-90 rounded-2xl shadow border border-gray-100 px-3 py-2 md:px-4 md:py-6 w-full min-h-[64px] md:min-h-[unset]"
              >
                {/* Nomor Kandidat */}
                <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-[#FF7272] text-white rounded-full flex items-center justify-center font-semibold text-base md:text-2xl mr-2 md:mr-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {row.no}
                </div>
                {/* Foto Kandidat */}
                <div className="flex-shrink-0 w-10 h-10 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white mr-2 md:mr-4">
                  <img
                    src={row.image}
                    alt={`Kandidat ${row.no}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Nama & Persentase */}
                <div className="flex-1 flex flex-row items-center justify-between">
                  <span className="text-sm md:text-xl font-medium text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans' }}>{row.name}</span>
                  <span className="text-base md:text-2xl font-bold text-gray-900 ml-2 md:ml-0" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {parseFloat(row.vote_percentage).toFixed(1).replace('.', ',')}%
                  </span>
                </div>
              </div>
            ))}
        </div>
      </main>
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

      <Footer />
    </>
  );
};

export default Page;
