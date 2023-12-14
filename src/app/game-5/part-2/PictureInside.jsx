'use client';
import React from 'react';

export default function PictureInside({ url, width, height, float }) {
  console.log(float);
  console.log(width);
  console.log(height);
  console.log(url);
  return (
    <div>
      <img src={url + ".png"} alt="" className={`z-0 w-[${width}] h-[${height}]`}/>
    </div>
  );
}
