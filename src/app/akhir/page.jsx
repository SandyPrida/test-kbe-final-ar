'use client';

import React from 'react';
import VideoLayout from '@/components/layout/videoLayout';

function akhir() {
  return (
    <VideoLayout>
      <div className='w-full h-[90dvh] flex items-center justify-center'>
        <p className='text-white text-lg text-center font-bold font-dragonSlayer' style={{ color:'#FFC436',border: '1px solid #FFC436',padding: '35px' }}>
        CONGRATULATIONS! YOU HAVE COMPLETED ALL GAMES
        </p>
      </div>
    </VideoLayout>
  );
}

export default akhir;
