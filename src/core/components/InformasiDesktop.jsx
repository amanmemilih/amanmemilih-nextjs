import React from 'react';

export default function InformasiDesktop() {
    return (
        <div className="max-w-full md:max-w-screen-xl mx-auto py-8 md:py-12 mt-16 md:mt-32">
            {/* Judul */}
            <div className="flex flex-col items-center justify-start text-center mb-12 md:mb-24">
                <div className="flex flex-col max-w-xs md:max-w-[800px] p-2 md:p-4">
                    <h1 className="text-2xl md:text-[52px] leading-8 md:leading-[72px] font-semibold text-black mb-2 md:mb-4">
                        Keamanan dan Kepercayaan adalah yang Utama
                    </h1>
                </div>
                <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                    Untuk menjamin demokrasi yang aman dan dapat dipercaya kami menggunakan pendekatan sebagai berikut
                </p>
            </div>
            {/* Konten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Biometric Verification */}
                <div className="flex items-start m-2 md:m-5">
                    <img
                        src="assets/images/group1.png"
                        alt="Biometric Verification"
                        className="w-12 h-12 md:w-20 md:h-20 mr-4 md:mr-6"
                    />
                    <div>
                        <h2 className="text-base md:text-xl font-bold text-black mb-1 md:mb-2">
                            Biometric Verification
                        </h2>
                        <p className="text-gray-8000 text-xs md:text-base">
                            AmanMemilih menggunakan verifikasi biometrik berupa sidik jari atau deteksi wajah yang terkoneksi dengan handphone pengguna dengan privasi data yang dipastikan terjaga, untuk memastikan pemilihan tidak diwakilkan.
                        </p>
                    </div>
                </div>
                {/* IPFS as Decentralize Storage */}
                <div className="flex items-start m-2 md:m-5">
                    <img
                        src="assets/images/group3.png"
                        alt="IPFS"
                        className="w-12 h-12 md:w-20 md:h-20 mr-4 md:mr-6"
                    />
                    <div>
                        <h2 className="text-base md:text-xl font-bold text-black mb-1 md:mb-2">
                            IPFS as Decentralize Storage
                        </h2>
                        <p className="text-gray-8000 text-xs md:text-base">
                            IPFS (Interplanetary File Sistem) memungkinkan tidak ada data yang bisa dimanipulasi dan dipastikan semua data tidak mengalami kerusakan. Bahkan AmanMemilih tidak dapat memodifikasi data yang ada.
                        </p>
                    </div>
                </div>
                {/* Secure Hash Algorithm */}
                <div className="flex items-start m-2 md:m-5">
                    <img
                        src="assets/images/group2.png"
                        alt="Secure Hash"
                        className="w-12 h-12 md:w-20 md:h-20 mr-4 md:mr-6"
                    />
                    <div>
                        <h2 className="text-base md:text-xl font-bold text-black mb-1 md:mb-2">
                            Secure Hash Algorithm
                        </h2>
                        <p className="text-gray-8000 text-xs md:text-base">
                            Sebelum data dikirim ke blockchain, data akan terlebih dahulu di hashing dengan SHA-256, walaupun data dapat diakses secara publik, tetap tidak ada yang tahu isi data tersebut kecuali disamakan dengan data aslinya.
                        </p>
                    </div>
                </div>
                {/* Blockchain as Decentralize DB */}
                <div className="flex items-start m-2 md:m-5">
                    <img
                        src="assets/images/group4.png"
                        alt="Blockchain"
                        className="w-12 h-12 md:w-20 md:h-20 mr-4 md:mr-6"
                    />
                    <div>
                        <h2 className="text-base md:text-xl font-bold text-black mb-1 md:mb-2">
                            Blockchain as Decentralize DB
                        </h2>
                        <p className="text-gray-8000 text-xs md:text-base">
                            Blockchain adalah solusi untuk melindungi data tersebut, dengan transaksi yang satu arah, memiliki nilai ID yang unik, dan ledger yang dapat diakses siapa saja. Data voting akan tetap orisinal, rahasia dan transparan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 