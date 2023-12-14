'use client';
import React from 'react';

export default function PictureInside({ url, width, height, z }) {
  console.log(z);
  return (
    <div>
      <img
        src={url + '.png'}
        alt=''
        className={`z-0 w-[${width}] h-[${height}] ${z ? `${z}` : ''}`}
      />
    </div>
  );
}