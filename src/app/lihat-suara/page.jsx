"use client";

import Footer from "@/core/components/Footer";
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

  function handleParticlesLoad() {
    console.log("particles.js script loaded");
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: { enable: true, value_area: 1000 }
          },
          color: { value: '#B0B0B0' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.8,
            random: true
          },
          size: {
            value: 2,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 180,
            color: '#B0B0B0',
            opacity: 0.8,
            width: 0.8
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: false },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: { opacity: 0.8 }
            }
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

      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="afterInteractive"
        onLoad={handleParticlesLoad}
      />

      <div className="bg-gradient-to-b from-white to-white relative">
        <div
          id="particles-js"
          className="absolute inset-0 z-0"
          style={{ height: '100%', width: '100%' }}
        ></div>

        <main className="relative max-w-screen-lg mx-auto px-4 py-8 md:py-16 text-center mt-[80px] z-10">
          <div className="flex flex-col items-center justify-start text-center mb-10 md:mb-24">
            <div className="flex flex-col max-w-[800px] p-4">
              <h1 className="text-[24px] md:text-[52px] leading-[38px] md:leading-[72px] font-semibold text-black mb-4">
                Pantau Hasil Real Count Presiden dan Wakil Presiden
              </h1>
            </div>
          </div>

          <div className="hidden md:flex justify-center gap-6 mt-10 px-4 relative z-10">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF7272]"></div>
              </div>
            ) : candidatSummary && candidatSummary.length > 0 ? (
              candidatSummary.map((row) => (
                <div
                  key={row.no}
                  className="relative z-10 backdrop-blur-md bg-[#3A3A3A]/5 rounded-lg overflow-hidden w-[380px] h-[350px] text-center"
                >
                  <div
                    className="absolute top-[150px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#FF7272] text-white rounded-full flex items-center justify-center font-semibold text-[28px] z-10"
                    style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  >
                    {row.no}
                  </div>
                  <div className="h-[174px] flex justify-center items-center">
                    <img
                      src={row.image}
                      alt={`Kandidat ${row.no}`}
                      className="h-auto w-auto max-w-full max-h-full mt-4"
                    />
                  </div>
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
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                Belum ada data tersedia.
              </div>
            )}
          </div>

          <div className="flex md:hidden flex-col w-full gap-3 mt-2 relative z-10">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#FF7272]"></div>
              </div>
            ) : candidatSummary && candidatSummary.length > 0 ? (
              candidatSummary.map((row) => (
                <div
                  key={row.no}
                  className="flex flex-row items-center backdrop-blur-md bg-[#3A3A3A]/5 rounded-lg overflow-hidden w-full py-3 px-4"
                >
                  <div
                    className="w-8 h-8 bg-[#FF7272] text-white rounded-full flex items-center justify-center font-semibold text-[16px] mr-3"
                    style={{ fontFamily: '"Plus Jakarta Sans"' }}
                  >
                    {row.no}
                  </div>
                  <img
                    src={row.image}
                    alt={`Kandidat ${row.no}`}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[20px] font-medium text-gray-800">{row.name}</h3>
                    <p className="text-[24px] font-semibold text-gray-900">
                      {parseFloat(row.vote_percentage).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                Belum ada data tersedia.
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Page;
