import React, { useState, useRef } from 'react';

const cards = [
    {
        title: 'AmanRekap',
        desc: 'Memastikan petugas hanya mengunggah surat suara melalui aplikasi ini yang langsung terhubung ke sistem kami, sehingga masyarakat dapat melihat surat suara setiap daerah di Indonesia.',
        img: '/assets/images/p2.png',
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

export default function CardInfoMobile() {
    const [active, setActive] = useState(0);
    const startX = useRef(null);

    // Swipe handler
    function handleTouchStart(e) {
        startX.current = e.touches[0].clientX;
    }
    function handleTouchEnd(e) {
        if (startX.current === null) return;
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX.current;
        if (diff > 50 && active > 0) setActive(active - 1);
        else if (diff < -50 && active < cards.length - 1) setActive(active + 1);
        startX.current = null;
    }

    function goToSlide(idx) {
        setActive(idx);
    }

    return (
        <section className="w-full max-w-md mx-auto pt-8 pb-4 px-4">
            {/* Judul */}
            <div className="text-center">
                <span className="font-bold text-2xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Aman</span>
                <span className="font-bold text-2xl text-[#FF7272] ml-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Memilih</span>
            </div>
            <p className="text-center text-base text-gray-700 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Aplikasi berbasis teknologi blockchain dengan sistem yang tidak terpusat dan menjamin keamanan data terutama data suara dan data pengguna, kami menjaga informasi, menjamin integritas data, keamanan dan mengeliminasi kemungkinan bocornya suatu informasi.
            </p>
            {/* Carousel */}
            <div className="relative overflow-hidden mb-10">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {cards.map((card, idx) => (
                        <div key={card.title} className="min-w-full px-2 flex flex-col items-center">
                            <div className="w-full bg-white rounded-2xl shadow-md border border-gray-100 py-6 px-4 flex flex-col items-center">
                                <div className="mb-4">
                                    <span className="inline-block px-6 py-2 rounded-full bg-[#ECECEC] text-black font-bold text-base">
                                        {card.title}
                                    </span>
                                </div>
                                <p className="text-center text-base text-gray-700 mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                    {card.desc}
                                </p>
                                <img src={card.img} alt={card.title} className="w-52 h-auto mt-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center mt-2 mb-4 space-x-3">
                {cards.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${active === idx ? 'bg-[#FF7272]' : 'bg-gray-300'}`}
                        style={{ outline: 'none' }}
                    />
                ))}
            </div>
        </section>
    );
} 