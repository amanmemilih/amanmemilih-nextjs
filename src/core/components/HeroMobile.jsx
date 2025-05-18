import React from 'react';

export default function HeroMobile() {
    return (
        <div className="relative w-full pt-4 mt-[72px] overflow-hidden font-['Plus_Jakarta_Sans']">
            <img
                src="/assets/images/hero-mobile.png"
                alt="Hero Mobile"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <img
                src="/assets/images/blur-mobile.png"
                alt="Blur Mobile"
                className="absolute inset-0 w-full h-full object-cover z-10"
            />
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-8 w-full max-w-none gap-6">
                <div className="flex flex-col items-center w-full">
                    <p className="font-medium text-white text-left text-[40px] leading-[52px] mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Pemungutan Suara Modern dengan Keamanan Tinggi dan Fleksibilitas
                    </p>
                    <p className="font-extralight text-white text-left text-[14px] leading-[20px] mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        AmanMemilih hadir sebagai solusi dari pengembangan sistem rekapitulasi suara menggunakan teknologi Web 3.0, dengan ini hasil rekapitulasi suara tidak bisa dimanipulasi oleh pihak ketiga.
                    </p>
                    <button className="font-semibold text-base bg-[#FF8B7B] text-white w-full h-14 rounded-xl mt-0" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Unduh Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
} 