'use client'

import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const iframeOri = "https://kbe-scan.vercel.app/";
  const iframeRef = useRef(null);

  useEffect(() => {
    // Fungsi untuk menangani pesan yang diterima dari iframe
    const handleMessage = (event) => {
      if (event.origin === "https://kbe-scan.vercel.app") {
        console.log("Pesan dari iframe:", event.data);
        router.push('testing');
        // setShowModal(true);
        // setModalTitle("SCAN SUCCESS");
        // setModalMessage("SCAN SUCCESS");
        // setNextLevel("game-2");
        // setModalIcon(iconSuccess);
        //   router.push(`/game-1`);
        // Lakukan sesuatu dengan pesan yang diterima dari iframe di sini
      }
    };

    // Menambahkan event listener ke window untuk menangkap pesan dari iframe
    window.addEventListener("message", handleMessage);

    return () => {
      // Membersihkan event listener saat komponen dilepas
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-full h-full bg-slate-800">
      <iframe
        src={iframeOri}
        ref={iframeRef}
        frameBorder="0"
        className="w-full"
        allow="camera"
        style={{
          height: "100vh",
        }}
      ></iframe>
    </div>
  );
}
