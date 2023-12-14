"use client";
import { Button } from '@/components/atoms/button/button';
import GuestLayout from '@/components/layout/guestLayout';
import React, { useEffect, useState } from 'react';
import Player from "./components/player";
import Food from "./components/food";
import { useRouter } from '../../../node_modules/next/navigation';

const Game4 = () => {
  const [playerPosition, setPlayerPosition] = useState(170); // Posisi awal player
  const [foodPositions, setFoodPositions] = useState([]); // Array posisi makanan
  const [score, setScore] = useState(0);
  const [foodSpawn, setFoodSpawn] = useState(['50%', '20%', '80%', '70%']);
  const [lives, setLives] = useState(3);

  const router = useRouter();

  const nextgame = () => {
    const queryString = window.location.search;
      const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
      const language = languageMatch ? languageMatch[1] : 'eng';

      const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
      const idUser = idUserMatch ? idUserMatch[1] : null;
    router.push(`/videoScroll3?language=${language}&id_user=${idUser}`); // Ganti '/your-route' dengan rute yang ingin Anda tuju
  };

  const spawn = [
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%",
  ];

  function getSpawnFood(key) {
    if (foodSpawn.hasOwnProperty(key)) {
      return foodSpawn[key];
    }
}

//Buat Atur kanan kiri keranjang & lebar gerak
useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft" && playerPosition > 0) {
        setPlayerPosition(playerPosition - 20);
      } else if (e.key === "ArrowRight" && playerPosition < 400) {
        setPlayerPosition(playerPosition + 20);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [playerPosition]);

  //food turun kebawah
  const moveFood = () => {
    setFoodPositions((prevPositions) => {
      // Perbarui posisi setiap makanan
      const updatedPositions = prevPositions.map((position) => {
        return (position + 10) % 600;
      });

      return updatedPositions;
    });
  };

  useEffect(() => {
    const foodInterval = setInterval(moveFood, 200);
    return () => clearInterval(foodInterval);
  }, []);

  //spawn food
  const addFood = () => {
    setFoodPositions((prevPositions) => {
      // Tambahkan makanan baru jika belum mencapai jumlah yang diinginkan
      if (prevPositions.length < 3) {
        return [...prevPositions, 0];
      }
      return prevPositions;
    });
  };

  useEffect(() => {
    const foodInterval = setInterval(addFood, 2000);
    return () => clearInterval(foodInterval);
  }, []);

  const checkCollision = () => {
    // Periksa tabrakan dengan setiap makanan
    foodPositions.forEach((position, index) => {
      if (
        position >= 580 &&
        playerPosition < 220 &&
        playerPosition + 100 > 200
      ) {
        setScore((prevScore) => prevScore + 1);
        // setLives((prevLives) => prevLives - 1);

        setFoodPositions((prevPositions) => {
          // Hapus makanan yang bertabrakan dari array
          const updatedPositions = [...prevPositions];
          updatedPositions.splice(index, 1);
          return updatedPositions;
        });

        setFoodSpawn((prevSpawn) => {
          // Hapus elemen yang sesuai dari foodSpawn
          const updatedSpawn = [...prevSpawn];
          updatedSpawn.splice(index, 1);

          // Pilih elemen baru secara acak dari spawn
          const randomIndex = Math.floor(Math.random() * spawn.length);
          const newFood = spawn[randomIndex];

          // Tambahkan elemen yang baru dipilih ke foodSpawn
          updatedSpawn.push(newFood);

          return updatedSpawn;
        });
      }
    });
  };

  useEffect(() => {
    checkCollision();
  }, [foodPositions, playerPosition]);

  useEffect(() => {
    if (lives === 0) {
      // Implementasikan logika untuk menghentikan permainan di sini
      // Misalnya, tampilkan pesan "Game Over" atau tampilkan skor total
      console.log("Game Over");
    }
  }, [lives]);

  return (
    <g>
      <div className='flex flex-col px-9 justify-center items-center'>
        <h1 className='text-2xl leading-normal font-pragatiNarrow text-primary'>
          PUT HEALTHY FOOD IN THE BASKET
        </h1>
        <p>Livess: {lives}</p>
      <p>Score: {score}</p>
        <Player position={playerPosition} />
        {foodPositions.map((position, index) => {
          console.log(index);
          return (
            <Food key={index} position={position} spawn={getSpawnFood(index)} />
          );
        })}
      </div>
      <div className="absolute w-full px-16 bottom-24">
          <button className='w-full bg-primary rounded-lg py-4' onClick={nextgame}>
              <h1 className='font-dragonSlayer text-secondary font-extrabold text-xl'>NEXT</h1>
          </button>
      </div>
    </g>
  );
};

export default Game4;
