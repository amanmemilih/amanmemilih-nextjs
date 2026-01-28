import React from 'react';

export default function HeroDesktop() {
    return (
        <div className="relative md:container md:mx-auto pt-8 mt-[36px] font-['Plus_Jakarta_Sans']">
            {/* Particles.js background for desktop */}
            <div id="particles-js" className="hidden md:block absolute inset-0 w-full h-full z-[-1] opacity-60 pointer-events-none" />
            <div className="grid grid-cols-2 p-8 place-items-center">
                <div className="gap-y-35">
                    {/* <p className="font-semibold text-[60px] md:text-[40]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Pemilihan dengan Keamanan Tinggi dan Fleksibilitas Perubahan
                    </p> */}
                    <p className="font-semibold text-[60px] md:text-[40]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        First Try Static Application Security Testing
                    </p>
                    <p className="font-normal leading-8 text-[20px] md:text-[10] mt-12" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        AmanMemilih hadir sebagai solusi dari pengembangan sistem rekapitulasi suara menggunakan teknologi Web 3.0, dengan ini hasil rekapitulasi suara tidak bisa dimanipulasi oleh pihak ketiga.
                    </p>
                    <button className="font-semibold text-[20] bg-[linear-gradient(5deg,_#ffd596_0%,_#ff7272_43%)] text-white px-8 py-4 rounded-lg mt-12 z-10 relative" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Unduh Sekarang
                    </button>
                </div>
                <div className="items-center">
                    <img src="assets/images/Illustration.png" alt="" />
                </div>
            </div>
        </div>
    );
}