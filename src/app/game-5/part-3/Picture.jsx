'use client';
import React from 'react';
import { useDrag } from 'react-dnd';

export default function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
      <img src={url + '.png'} alt='' width='50px' ref={drag} />
    </div>
  );
}
