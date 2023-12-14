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
    <img
      src={url + '.png'}
      className={`w-[40px]`}
      ref={drag}
    />
  );
}
