'use client';
import React from 'react';

export default function PictureInside({ url, width }) {
  return (
    <div>
      <img
        src={url + '.png'}
        alt=''
        className={`z-0 ${width ? `w-[${width}]` : ''} h-auto`}
      />
    </div>
  );
}
