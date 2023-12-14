  'use client';

import { Button } from '@/components/atoms/button/button';
import GuestLayout from '@/components/layout/guestLayout';
import IconIna from '@/assets/logo/IconIna';
import IconEng from '@/assets/logo/IconEng';
import IconNed from '@/assets/logo/IconNed';
import IconTick from '@/assets/logo/IconTick';
import { useState } from 'react';
import React from 'react';

export default function LanguageChoose() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handlebuttonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const buttonStyles = (buttonName: string) => {
    return selectedButton === buttonName ? 'border-primary border-4 ' : '';
  };

  const handleConfirmClick = () => {
    // Mengirimkan parameter ke halaman lain menggunakan React Router
    window.location.href = `/login?language=${selectedButton}`;
  };

  return (
    <GuestLayout>
      <div className='absolute inset-0 top-20 text-center h-fit'>
        <h1 className='text-2xl leading-normal font-dragonSlayer text-primary'>
          SELECT LANGUAGE
        </h1>
        <div className='flex items-center justify-center mt-3'>
          <div className='flex flex-col items-center justify-center mx-5'>
            <button
              className={`focus:outline-none rounded-full ${buttonStyles('ned')}`}
              onClick={() => handlebuttonClick('ned')}
            >
              <IconNed />
            </button>
            <span
              className='font-dragonSlayer text-primary mt-3'
              style={{
                fontSize: '16px',
              }}
            >
              NED
            </span>
            { selectedButton === 'ned' && <IconTick /> }
          </div>
          <div className='flex flex-col items-center justify-center mx-5'>
            <button
              className={`focus:outline-none rounded-full  ${buttonStyles('eng')}`}
              onClick={() => handlebuttonClick('eng')}
            >
              <IconEng />
            </button>
            <span
              className='font-dragonSlayer text-primary mt-3'
              style={{
                fontSize: '16px',
              }}
            >
              ENG
            </span>
            { selectedButton === 'eng' && <IconTick /> }
          </div>
          <div className='flex flex-col items-center justify-center mx-5'>
            <button
              className={`focus:outline-none rounded-full ${buttonStyles('ina')}`}
              onClick={() => handlebuttonClick('ina')}
            >
              <IconIna />
            </button>
            <span
              className='font-dragonSlayer text-primary mt-3'
              style={{
                fontSize: '16px',
              }}
            >
              INA
            </span>
            { selectedButton === 'ina' && <IconTick /> }
          </div>
        </div>
      </div>
      <div className='px-9 mb-28'>
        <Button variant={'default'} link='#' onClick={handleConfirmClick}>
          CONFIRM
        </Button>
      </div>
    </GuestLayout>
  );
}
