"use client";

import Footer from "@/core/components/Footer";
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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

  return (
    <>
      <Navbar />

      {/* Content */}
      <div className="md:container md:mx-auto pt-8 mt-[36px]">
        <div className="grid grid-cols-2 p-8 place-items-center">
          <div className="gap-y-35">
            <p className="font-semibold text-[60px] md:text-[40]">
              Pemungutan Suara Modern dengan Keamanan Tinggi dan Fleksibilitas
            </p>
            <p className="font-normal leading-8 text-[20px] md:text-[10] mt-12">
              AmanMemilih hadir sebagai solusi dari pengembangan sistem
              rekapitulasi suara menggunakan teknologi Web 3.0, dengan ini hasil
              rekapitulasi suara tidak bisa dimanipulasi oleh pihak ketiga.
            </p>
            <button className="font-semibold text-[20] bg-[linear-gradient(5deg,_#ffd596_0%,_#ff7272_43%)] text-white px-8 py-4 rounded-lg mt-12 z-10 relative">
              {/* bg-gradient-to-b from-[#FF7272] from-60% to-[#FFD596] */}
              Unduh Sekarang
            </button>
          </div>
          <div className="items-center">
            <img src="assets/images/Illustration.png" alt="" />
          </div>
        </div>
      </div>
      {/* Particle.js Background */}
      <div
        id="particles-js"
        className="mt-24 mb-48 absolute inset-0 z-[-1] overflow-hidden opacity-50"
      ></div>
      <div id="tentang"></div>
      {/* ----- SECTION CARD INFO ----- */}
      <div className="flex items-center justify-center space-x-8 my-24 mb-32 px-2">
        <span className="text-black text-[44px] font-semibold mr-[-32px]">
          Aman
        </span>
        <span className="text-[#FF7272] text-[44px] font-semibold">
          Memilih
        </span>
        <p className="text-gray-700 text-lg max-w-4xl">
          Aplikasi berbasis teknologi blockchain dengan sistem yang tidak
          terpusat dan menjamin keamanan data, terutama data suara dan data
          pengguna. Kami menjaga informasi, menjamin integritas data, keamanan,
          dan mengeliminasi kemungkinan bocornya suatu informasi.
        </p>
      </div>
      {/* Container Box */}
      <div className="container mx-auto flex flex-row mb-4 justify-between space-x-4">
        {/* Box 1 */}
        <div className="king container flex flex-col justify-center box rounded-2xl shadow-2xl shadow-[#FF7272]/10 border-2 border-gray-100">
          <div className="px-12 py-12 flex flex-col justify-center">
            <button className="mx-24 py-4 px-6 rounded-full text-black font-bold bg-[#ECECEC] transition-all duration-300 hover:bg-[#FF7272] hover:text-[#FFFFFF]">
              AmanRekap
            </button>
            <p className="my-4 text-center">
              Memastikan petugas hanya mengunggah surat suara melalui aplikasi
              ini yang langsung terhubung ke sistem kami, sehingga masyarakat
              dapat melihat surat suara setiap daerah di Indonesia.
            </p>
          </div>
          <div className="flex justify-center">
            <img className=" " src="assets/images/p1.png" alt="demoapp" />
          </div>
        </div>
        {/* Box 2 */}
        <div className="king container flex flex-col justify-center box rounded-2xl shadow-2xl shadow-[#FF7272]/10 border-2 border-gray-100">
          <div className="px-8 py-12 flex flex-col justify-center">
            <button className="mx-24 py-4 px-6 rounded-full text-black font-bold bg-[#ECECEC] transition-all duration-300 hover:bg-[#FF7272] hover:text-[#FFFFFF]">
              AmanHasil
            </button>
            <p className="my-7 text-center">
              Memusatkan segala informasi dari sumber sumber yang kredibel, hal
              ini juga mencegah kamu mengurangi resiko informasi hoax.
            </p>
          </div>
          <div className="flex justify-center ">
            <img className=" " src="assets/images/p2.png" alt="demoapp" />
          </div>
        </div>
        {/* Box 3 */}
        <div className="king container flex flex-col justify-center box rounded-2xl shadow-2xl shadow-[#FF7272]/10 border-2 border-gray-100">
          <div className="px-12 py-12 flex flex-col justify-center">
            <button className="mx-24 py-4 px-6 rounded-full text-black font-bold bg-[#ECECEC] transition-all duration-300 hover:bg-[#FF7272] hover:text-[#FFFFFF]">
              AmanLapor
            </button>
            <p className="my-7 text-center">
              Tempat pengaduan atau bertanya mengenai proses vote dari setiap
              VotingRoom. berinteraksi dengan Smartchat, atau guide book.
            </p>
          </div>
          <div className="flex justify-center">
            <img className=" " src="assets/images/p2.png" alt="demoapp" />
          </div>
        </div>
      </div>
      {/* ----- SECTION 2 LANGKAH ----- */}
      {/* Header */}
      <div id="cara-kerja"></div>
      <div className="flex justify-center">
        <div className="flex items-center justify-center rounded-md text-center p-20">
          <h1 className="leading-normal text-black text-[52px] font-semibold mb-4">
            2 Langkah agar AmanMemilih
          </h1>
        </div>
      </div>
      {/* Konten */}
      <div className="flex justify-center space-x-16">
        <div className="flex flex-col items-center w-96 h-auto p-8 pt-20 mt-24 bg-white rounded-lg shadow-2xl shadow-[#FF7272]/10 scale-150 mr-48">
          <img
            src="assets/images/undraw_shared_workspace_re_3gsu 1.png"
            alt="Pantau hasil real count"
            className="w-full h-40 object-contain"
          />
          <h2 className="text-2xl font-bold mt-8 text-left w-full">
            Pantau hasil real count
          </h2>
          <p className="text-base text-gray-600 mt-4">
            Ketahui hasil rekapitulasi suara dari pasangan calon pilihan kamu
            secara real-time
          </p>
        </div>
        <div className="flex flex-col items-center w-96 h-auto p-8 bg-white mt-24 bg-opacity-30 backdrop-blur-md rounded-lg shadow-2xl shadow-[#FF7272]/10 scale-150">
          <img
            src="assets/images/illustration2.png"
            alt="Pantau hasil real count"
            className="w-48 h-48"
          />
          <h2 className="text-2xl font-bold mt-10 text-left w-full">
            Laporkan
          </h2>
          <p className="text-base text-gray-600 mt-4">
            Jika terdapat kesalahan pada hasil rekapitulasi suara, segera
            laporkan ke Bawaslu setempat.
          </p>
        </div>
      </div>
      {/* ----- SECTION INFORMASI ----- */}
      <div id="teknologi"></div>
      <div className="max-w-screen-xl mx-auto py-12 mt-32">
        {/* Judul */}
        <div className="flex flex-col items-center justify-start text-center mb-24">
          <div className="flex flex-col max-w-[800px] p-4">
            <h1 className="text-[52px] leading-[72px] font-semibold text-black mb-4">
              Keamanan dan Kepercayaan adalah yang Utama
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Untuk menjamin demokrasi yang aman dan dapat dipercaya kami
            menggunakan pendekatan sebagai berikut
          </p>
        </div>
        {/* Konten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Biometric Verification */}
          <div className="flex items-start m-5">
            <img
              src="assets/images/group1.png"
              alt="Biometric Verification"
              className="w-20 h-20 mr-6"
            />
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                Biometric Verification
              </h2>
              <p className="text-gray-8000">
                AmanMemilih menggunakan verifikasi biometrik berupa sidik jari
                atau deteksi wajah yang terkoneksi dengan handphone pengguna
                dengan privasi data yang dipastikan terjaga, untuk memastikan
                pemilihan tidak diwakilkan.
              </p>
            </div>
          </div>
          {/* IPFS as Decentralize Storage */}
          <div className="flex items-start m-5">
            <img
              src="assets/images/group3.png"
              alt="IPFS"
              className="w-20 h-20 mr-6"
            />
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                IPFS as Decentralize Storage
              </h2>
              <p className="text-gray-8000">
                IPFS (Interplanetary File Sistem) memungkinkan tidak ada data
                yang bisa dimanipulasi dan dipastikan semua data tidak mengalami
                kerusakan. Bahkan AmanMemilih tidak dapat memodifikasi data yang
                ada.
              </p>
            </div>
          </div>
          {/* Secure Hash Algorithm */}
          <div className="flex items-start m-5">
            <img
              src="assets/images/group2.png"
              alt="Secure Hash"
              className="w-20 h-20 mr-6"
            />
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                Secure Hash Algorithm
              </h2>
              <p className="text-gray-8000">
                Sebelum data dikirim ke blockchain, data akan terlebih dahulu di
                hashing dengan SHA-256, walaupun data dapat diakses secara
                publik, tetap tidak ada yang tahu isi data tersebut kecuali
                disamakan dengan data aslinya.
              </p>
            </div>
          </div>
          {/* Blockchain as Decentralize DB */}
          <div className="flex items-start m-5">
            <img
              src="assets/images/group4.png"
              alt="Blockchain"
              className="w-20 h-20 mr-6"
            />
            <div>
              <h2 className="text-xl font-bold text-black mb-2">
                Blockchain as Decentralize DB
              </h2>
              <p className="text-gray-8000">
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
      <div id="berita"></div>
      <div className="flex justify-center">
        <div className="flex items-center justify-center rounded-md text-center p-12">
          <h1 className="leading-normal text-black text-5xl font-semibold">
            Berita
          </h1>
        </div>
      </div>
      {isLoading ? (
        ""
      ) : (
        <div className="flex justify-center space-x-8 my-6">
          {data?.slice(0, 3).map((row) => (
            <Link
              href={"/berita/" + row.id}
              key={row.id}
              className="max-w-sm rounded overflow-hidden cursor-pointer"
            >
              <img
                className="w-full"
                src={row.thumbnail}
                alt="Sunset in the mountains"
              />
              <div className="px-2 py-4">
                <div
                  className="font-normal text-[20px] mb-2"
                  style={{ fontFamily: '"Alata"' }}
                >
                  {truncateText(row.title, 30)}
                </div>
                <p className="text-gray-400 text-base opacity-90">
                  {truncateText(row.body, 120)}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 px-2 py-4">
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
      )}
      <Footer />
    </>
  );
}
