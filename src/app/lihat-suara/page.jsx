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
      {/* Particle.js Background */}
      <div
        id="particles-js"
        className="absolute inset-0 z-0 overflow-hidden mt-24 opacity-50"
      ></div>
      {/* Hero Section */}
      <main className="relative max-w-screen-lg mx-auto px-4 py-16 text-center mt-[80px]">
        <div className="flex flex-col items-center justify-start text-center mb-24">
          <div className="flex flex-col max-w-[800px] p-4">
            <h1 className="text-[52px] leading-[72px] font-semibold text-black mb-4">
              Pantau hasil real count Presiden dan Wakil Presiden
            </h1>
          </div>
        </div>
        {/* Paslon Percentage Section */}
        <div className="flex justify-center gap-6 mt-10 px-4 relative z-10">
          {isLoading
            ? ""
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
                  <div className="h-[174px] flex justify-center items-center  ">
                    <img
                      src={row.image}
                      alt="Kandidat 1"
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
      </main>
      {/* Form Section */}
      <div className=" max-w-screen-full mx-auto px-4 py-16 text-center">
        <h1
          className="text-[40px] font-bold mb-8 relative z-10"
          style={{ fontFamily: '"Plus Jakarta Sans"' }}
        >
          Cari berdasarkan daerah anda
        </h1>
        <div className="w-full max-w-6xl mx-auto px-[40px] py-[52px] bg-white rounded-2xl shadow-2xl shadow-[#FF7272]/10 border border-[#FFECEC]">
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
                className={`px-16 py-3 text-lg rounded-3xl text-white ${
                  documentID == null || documentID == ""
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
