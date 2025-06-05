import React from 'react';

const infos = [
    {
        icon: 'assets/images/Group1.png',
        title: 'Biometric Verification',
        desc: 'AmanMemilih menggunakan verifikasi biometrik berupa sidik jari atau deteksi wajah yang terkoneksi dengan handphone pengguna dengan privasi data yang dipastikan terjaga, untuk memastikan pemilihan tidak diwakilkan.'
    },
    {
        icon: 'assets/images/Group3.png',
        title: 'IPFS as Decentralize Storage',
        desc: 'IPFS (Interplanetary File Sistem) memungkinkan tidak ada data yang bisa dimanipulasi dan dipastikan semua data tidak mengalami kerusakan. Bahkan AmanMemilih tidak dapat memodifikasi data yang ada.'
    },
    {
        icon: 'assets/images/Group2.png',
        title: 'Secure Hash Algorithm',
        desc: 'Sebelum data dikirim ke blockchain, data akan terlebih dahulu di hashing dengan SHA-256, walaupun data dapat diakses secara publik, tetap tidak ada yang tahu isi data tersebut kecuali disamakan dengan data aslinya.'
    },
    {
        icon: 'assets/images/Group4.png',
        title: 'Blockchain as Decentralize DB',
        desc: 'Blockchain adalah solusi untuk melindungi data tersebut, dengan transaksi yang satu arah, memiliki nilai ID yang unik, dan ledger yang dapat diakses siapa saja. Data voting akan tetap orisinal, rahasia dan transparan.'
    },
];

export default function InformasiMobile() {
    return (
        <section className="w-full max-w-md mx-auto py-8 px-4">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-medium p-4 text-black leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Keamanan dan Kepercayaan<br />adalah yang Utama
                </h1>
                <p className="text-gray-600 text-base mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Untuk menjamin demokrasi yang aman dan dapat dipercaya kami menggunakan pendekatan sebagai berikut
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {infos.map((info, idx) => (
                    <div key={info.title} className="bg-white rounded-2xl shadow border border-gray-100 px-4 py-5 flex flex-col items-start mb-2">
                        <div className="flex items-center mb-2">
                            <img src={info.icon} alt={info.title} className="w-8 h-8 mr-3" />
                            <span className="font-bold text-lg text-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{info.title}</span>
                        </div>
                        <p className="text-gray-800 mt-2 text-base" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{info.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 