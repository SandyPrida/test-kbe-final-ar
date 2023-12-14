import React from 'react';

export default function PictureInside({ url, width, left, top }) {
  console.log('width: ' + width);
  console.log('left: ' + left);
  console.log('top: ' + top);
  return (
    <img
      src={url + '.png'}
      alt=''
      className={`z-0 w-[${width}] left-[${left}] top-[${top}] absolute`}
    />
  );
}
