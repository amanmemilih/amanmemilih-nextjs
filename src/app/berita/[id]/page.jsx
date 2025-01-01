"use client";

import Footer from "@/core/components/Footer";
import Loading from "@/core/components/Loading";
import Navbar from "@/core/components/Navbar";
import api from "@/core/utils/api";
import React, { use, useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = use(params);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    const response = await api.get("/blogs/" + id);
    setIsLoading(false);

    setData(response.data.data);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-12">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <main className="relative max-w-screen-lg mx-auto py-16 flex-grow">
              <div className="flex flex-col mb-20">
                <div className="flex flex-col p-4 text-left">
                  {" "}
                  {/* Hapus max-w-[800px] */}
                  <h1 className="text-[52px] font-semibold text-black mb-4">
                    {data.title}
                  </h1>
                  <img
                    src={data.thumbnail}
                    alt=""
                    className="w-full h-auto object-cover" // Pastikan w-full dan h-auto ditambahkan
                  />
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
            </main>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default page;
