// Modal.js
'use client';
import React, {useState} from 'react';
import { Button } from '@/components/atoms/button/button';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, message,title,icon, nextLevel}) => {
  const queryString = window.location.search;
      const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
      const language = languageMatch ? languageMatch[1] : 'eng';

      const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
      const idUser = idUserMatch ? idUserMatch[1] : null;
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div
            className='text-center p-8 max-w-md mx-auto z-50'
            style={{
              border: '1px solid #FFC436',
              backgroundColor: 'black',
              borderRadius: '10px',
            }}
          >
            <div className='flex justify-center'>
              <Image
                className='absolute'
                style={{ marginTop: '-60px' }}
                src={icon}
                alt='Checkmark'
              />
            </div>
            <h1
              className='m-5 font-dragonSlayer'
              style={{ fontWeight: 'bold', color: '#FFC436' }}
            >
              {title}
            </h1>
            <p className='mb-4 text-white' style={{ fontWeight: 'bold' }}>
              {message}
            </p>
            <Button
              variant={'default'}
              link={nextLevel ? nextLevel+`?language=${language}&id_user=${idUser}` : '#'}
              onClick={onClose}
            >
              CONTINUE
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
