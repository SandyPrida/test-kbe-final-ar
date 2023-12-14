'use client'

import React, { useRef, useState, useEffect } from "react";
import VideoLayout from '../../components/layout/videoLayout'
import { useRouter } from '../../../node_modules/next/navigation';
import iconSuccess from '@/assets/images/berhasil.png';
import Modal from '@/components/pop_up/alert';

function ArScan() {
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalIcon, setModalIcon] = useState('');
    const [nextLevel, setNextLevel] = useState(null);

    const iframeOri = 'https://kbe-scan.vercel.app/';
    const iframeRef = useRef(null);

    const closeModal = () => {
      // Close the modal
      setShowModal(false);
    };

    useEffect(() => {
      // Fungsi untuk menangani pesan yang diterima dari iframe
      const handleMessage = (event) => {
        if (event.origin === 'https://kbe-scan.vercel.app') {
          console.log('Pesan dari iframe:', event.data);
          setShowModal(true);
          setModalTitle('SCAN SUCCESS');
          setModalMessage('SCAN SUCCESS');
          setNextLevel('game-2');
          setModalIcon(iconSuccess);
        //   router.push(`/game-1`);
          // Lakukan sesuatu dengan pesan yang diterima dari iframe di sini
        }
      };

      // Menambahkan event listener ke window untuk menangkap pesan dari iframe
      window.addEventListener('message', handleMessage);

      return () => {
        // Membersihkan event listener saat komponen dilepas
        window.removeEventListener('message', handleMessage);
      };
    }, []);

    return (
      <VideoLayout>
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          message={modalMessage}
          title={modalTitle}
          icon={modalIcon}
          nextLevel={nextLevel}
        />
        <iframe
          src={iframeOri}
          ref={iframeRef}
          frameBorder='0'
          className='w-full'
          allow='camera'
          style={{
            height: '90vh',
          }}
        ></iframe>
      </VideoLayout>
    );
}

export default ArScan;