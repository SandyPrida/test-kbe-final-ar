'use client';

import React from 'react';
import VideoLayout from '@/components/layout/videoLayout';
import ExclamationMark from '@/assets/logo/ExclamationMark';
import GameTwoHeader from '@/assets/logo/GameTwoHeader';
import Image from '../../../node_modules/next/image';
import ManBorder from '../../assets/game-2/ManBorder.png';
import part1 from '../../assets/game-2/part-1.png';
import part2 from '../../assets/game-2/part-2.png';
import part3 from '../../assets/game-2/part-3.png';
import part4 from '../../assets/game-2/part-4.png';
import part5 from '../../assets/game-2/part-5.png';
import part6 from '../../assets/game-2/part-6.png';
import { useRouter } from '../../../node_modules/next/navigation';

function Game2() {
  const router = useRouter();

  const nextgame = () => {
    const queryString = window.location.search;
      const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
      const language = languageMatch ? languageMatch[1] : 'eng';

      const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
      const idUser = idUserMatch ? idUserMatch[1] : null;
    router.push(`/videoScroll2?language=${language}&id_user=${idUser}`); // Ganti '/your-route' dengan rute yang ingin Anda tuju
  };

    const images = [
        part1,
        part2,
        part3,
        part4,
        part5,
        part6,
    ]

    return (
      <VideoLayout>
        <div className='w-full h-[90dvh] overflow-hidden'>
          <div className='relative w-full h-full flex flex-col items-center justify-start my-4'>
            <div className='w-full flex flex-col items-center justify-center'>
              <div className='w-full flex items-center justify-end px-3 mb-3'>
                <p className='text-primary font-thin mx-3'>Instruction</p>
                <ExclamationMark />
              </div>
              <GameTwoHeader />
              <p className='text-white text-xs mt-3'>Drag and Drop Puzzle</p>
            </div>
            <Image src={ManBorder} className='py-2' />
            <div className="absolute w-full px-16 bottom-24">
                <button className='w-full bg-primary rounded-lg py-4' onClick={nextgame}>
                    <h1 className='font-dragonSlayer text-secondary font-extrabold text-xl'>NEXT</h1>
                </button>
            </div>
            <div
              className='relative w-full flex items-center justify-around'
              style={{
                background: 'rgba(77, 77, 77, 0.50)',
              }}
            >
              {images.map((image, index) => (
                <Image src={image} key={index} className='h-12 w-auto m-3 cursor-grab' />
              ))}
            </div>
          </div>
        </div>
      </VideoLayout>
    );
}

export default Game2;