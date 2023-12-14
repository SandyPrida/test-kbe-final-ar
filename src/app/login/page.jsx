'use client';
import { Button } from '@/components/atoms/button/button';
import GuestLayout from '@/components/layout/guestLayout';
import React, { useState, useEffect } from 'react';
import { addUserToFirebase } from '../../firebase/firebaseUtils.js';
import Modal from '@/components/pop_up/alert';
import { useRouter } from 'next/navigation.js';
import iconSuccess from '@/assets/images/berhasil.png';
import iconGagal from '@/assets/images/gagal.png';

const Login = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalIcon, setModalIcon] = useState('');
  const handleButtonClick = async () => {
    const inputName = document.getElementById('inputName').value;

    if (inputName == '' || inputName == null) {
      setModalIcon(iconGagal);
      setModalTitle('FAILED LOGIN');
      setModalMessage('Please input your name !');
      setShowModal(true);
      return false;
    }
    const queryString = window.location.search;
    const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
    const language = languageMatch ? languageMatch[1] : 'eng';
    try {
      const UserAktif = await addUserToFirebase(inputName, language);
      console.log('User :' + UserAktif);
      // return false;
      router.push(`/videoScroll?language=${language}&id_user=${UserAktif}`);
      // window.location.href = `/profil?language=${language}&id_user=${UserAktif}`;
    } catch (error) {
      alert('Masukkan Nama Yang Valid');
    }
  };
  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };
  return (
    <GuestLayout>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        message={modalMessage}
        title={modalTitle}
        icon={modalIcon}
      />
      <div className='flex flex-col px-9 justify-center items-center'>
        <h1 className='text-2xl leading-normal font-dragonSlayer text-primary'>
          WELCOME
        </h1>
        <p className='text-white font-pragatiNarrow text-xl mt-1 focus:ring-0 focus:ring-primary focus:border-0 focus:'>
          Please enter your name to log in the game
        </p>
        <input
          id='inputName'
          className='border-2 w-full mt-6 font-dragonSlayer text-primary placeholder:text-primary bg-gray/50 border-primary rounded-lg h-12 px-4'
          placeholder='Your Name'
        />
      </div>
      <div className='px-9 mb-28'>
        <Button variant={'default'} link='#' onClick={handleButtonClick}>
          CONFIRM
        </Button>
      </div>
    </GuestLayout>
  );
};

export default Login;
