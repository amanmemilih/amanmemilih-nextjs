"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import Navbar from "@/core/components/Navbar";
import Footer from "@/core/components/Footer";
import api from "@/core/utils/api";
import Loading from "@/core/components/Loading";

export default function Home({ params }) {
  const { id, election } = use(params);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDocument();
  }, []);

  async function fetchDocument() {
    setIsLoading(true);
    const response = await api.get(
      "/documents/" + id + "?election_type=" + election
    );
    setIsLoading(false);

    setData(response.data.data);
  }

  const MAX_SCALE = 3;
  const MIN_SCALE = 1;

  const handleOpenPopup = (index) => {
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.documents.length);
    resetZoomAndPosition();
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + data.documents.length) % data.documents.length
    );
    resetZoomAndPosition();
  };

  const resetZoomAndPosition = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(MAX_SCALE, prev + 0.1));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(MIN_SCALE, prev - 0.1));
  };

  const handleMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      setStartPosition({
        x: e.pageX - offset.x,
        y: e.pageY - offset.y,
      });
    },
    [offset]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();

      setOffset({
        x: e.pageX - startPosition.x,
        y: e.pageY - startPosition.y,
      });
    },
    [isDragging, startPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen mt-12">
        {" "}
        {/* Added flex container */}
        {/* Hero Section */}
        {isLoading || !data ? (
          <Loading />
        ) : (
          <main className="relative max-w-screen-lg mx-auto px-4 py-16 flex-grow">
            {" "}
            {/* Added flex-grow */}
            <div className="flex flex-col items-center justify-start text-center mb-20">
              <div className="flex flex-col max-w-[800px] p-4">
                <h1 className="text-[52px] leading-[72px] font-semibold text-black mb-4">
                  Pantau Hasil Real Count Presiden dan Wakil Presiden
                </h1>
              </div>
            </div>
            {/* Location Selection */}
            <div className="bg-gradient-to-r from-[#FFD596] to-[#FF7272] rounded-md relative z-10">
              <div className="bg-white bg-opacity-60 rounded-md px-6 py-3 text-left">
                <span className="text-black font-medium">
                  Wilayah Pemilihan:{" "}
                </span>
                <span className="text-gray-600 font-normal">
                  {data.tps.province} / {data.tps.district} /{" "}
                  {data.tps.subdistrict} / {data.tps.village} /{" "}
                  {data.tps.username}
                </span>
              </div>
            </div>
            {/* Document Section */}
            <section className="mt-16 relative z-10 mb-5">
              {" "}
              {/* Added mb-20 */}
              <h2 className="text-4xl font-bold mb-8 text-center">
                Hasil Pindai Dokumen
              </h2>
              <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-8">
                {data.documents.map((src, index) => (
                  <div
                    key={index}
                    className="w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    onClick={() => handleOpenPopup(index)}
                  >
                    <img
                      src={src}
                      alt={`Dokumen ${index + 1}`}
                      className="shadow-lg object-cover h-192 w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          </main>
        )}
        {/* Footer moved outside of main */}
        <Footer />
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={(e) => e.target === e.currentTarget && handleClosePopup()}
        >
          <div
            className="relative h-auto w-auto max-w-4xl max-h-full overflow-hidden cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`,
                transition: isDragging ? "none" : "transform 0.3s",
              }}
            >
              <img
                src={data.documents[currentImageIndex]}
                alt="Popup"
                width={800}
                height={600}
                className="max-w-full max-h-full"
              />
            </div>

            {/* Controls */}
            <button
              className="fixed top-4 right-4 bg-white text-black rounded-full px-3 py-1 shadow-lg hover:bg-gray-200"
              onClick={handleClosePopup}
            >
              ✕
            </button>

            <button
              className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full px-4 py-2 shadow-lg hover:bg-gray-200"
              onClick={handlePrevImage}
            >
              ←
            </button>

            <button
              className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full px-4 py-2 shadow-lg hover:bg-gray-200"
              onClick={handleNextImage}
            >
              →
            </button>

            <button
              className="fixed top-4 left-4 bg-white text-black rounded-full px-3 py-1 shadow-lg hover:bg-gray-200"
              onClick={handleZoomIn}
            >
              +
            </button>

            <button
              className="fixed top-4 left-16 bg-white text-black rounded-full px-3 py-1 shadow-lg hover:bg-gray-200"
              onClick={handleZoomOut}
            >
              -
            </button>
          </div>
        </div>
      )}
    </>
  );
}
