import React from 'react';

const cards = [
    {
        title: 'AmanRekap',
        desc: 'Memastikan petugas hanya mengunggah surat suara melalui aplikasi ini yang langsung terhubung ke sistem kami, sehingga masyarakat dapat melihat surat suara setiap daerah di Indonesia.',
        img: '/assets/images/p1.png',
    },
    {
        title: 'AmanHasil',
        desc: 'Memusatkan segala informasi dari sumber sumber yang kredibel, hal ini juga mencegah kamu mengurangi resiko informasi hoax.',
        img: '/assets/images/p2.png',
    },
    {
        title: 'AmanLapor',
        desc: 'Tempat pengaduan atau bertanya mengenai proses vote dari setiap VotingRoom. berinteraksi dengan Smartchat, atau guide book.',
        img: '/assets/images/p3.png',
    },
];

export default function CardInfoDesktop() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0 my-16 md:my-24 mb-16 md:mb-32 px-2 text-center">
            <div className="w-full">
                <div className="flex justify-center items-center mb-6">
                    <span className="text-[44px] font-semibold text-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Aman</span>
                    <span className="text-[44px] font-semibold text-[#FF7272] ml-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Memilih</span>
                </div>
                <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-12" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Aplikasi berbasis teknologi blockchain dengan sistem yang tidak terpusat dan menjamin keamanan data, terutama data suara dan data pengguna. Kami menjaga informasi, menjamin integritas data, keamanan, dan mengeliminasi kemungkinan bocornya suatu informasi.
                </p>
                <div className="flex flex-row justify-center gap-10">
                    {cards.map((card) => (
                        <div key={card.title} className="group flex flex-col items-center bg-white rounded-3xl shadow-lg border border-gray-100 px-10 py-8 max-w-sm w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <button className="mb-6 px-8 py-2 rounded-full text-black font-bold text-lg bg-[#ECECEC] transition-all duration-300 group-hover:bg-[#FF7272] group-hover:text-white cursor-default shadow-md">{card.title}</button>
                            <p className="text-center text-base text-gray-700 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{card.desc}</p>
                            <img src={card.img} alt={card.title} className="w-56 h-auto mt-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 