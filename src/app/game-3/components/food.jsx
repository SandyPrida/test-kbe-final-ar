import React from 'react';
import Image from 'next/image';

const Food = ({ position, spawn }) => {
  const foodList = [
    { name: '..', width: '50px', height: '50px' },
    // Tambahkan lebih banyak item sesuai kebutuhan Anda
  ];

  const randomIndex = Math.floor(Math.random() * foodList.length);
  const selectedFood = foodList[randomIndex];

  const foodStyle = {
    width: selectedFood.width,
    height: selectedFood.height,
    // backgroundColor: 'red',
    position: 'absolute',
    top: `${position}px`,
    left: `${spawn}`, // Makanan jatuh dari tengah
  };

  return <img src='game-3/s1.png' style={foodStyle} alt='seffsef' />;
};

export default Food;
