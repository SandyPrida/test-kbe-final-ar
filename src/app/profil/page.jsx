'use client';

import React from 'react';
import VideoLayout from '@/components/layout/videoLayout';
import IconImgProfile from '@/assets/logo/IconImgProfile';
import IconHistory from '@/assets/logo/IconHistory';
import IconHeart from '@/assets/logo/IconHeart';
import Image from 'next/image';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import { getUserFromFirebase } from '../../firebase/firebaseUtils.js';
import { useEffect, useState } from 'react';

function Profil() {
  const queryString = window.location.search;
  const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
  const language = languageMatch ? languageMatch[1] : 'eng';

  const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
  const idUser = idUserMatch ? idUserMatch[1] : null;

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataFromFirebase = await getUserFromFirebase(idUser);
        console.log(userDataFromFirebase)
        setUserData(userDataFromFirebase);
      } catch (error) {
        alert('Gagal Memuat Data');
        window.location.href =`/login?language=${language}`;
      }
    };

    fetchData();
  }, [idUser, language]);
  return (
    <VideoLayout>
      <div className='flex flex-col items-center justify-between'>
        <div className='text-center p-5 border-b-2 border-gray w-full'>
          <h1 className='text-white text-2xl leading-normal font-dragonSlayer'>
            PROFILE
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center w-full mt-10'>
          <IconImgProfile />
          <p className='text-white font-pragatiNarrow text-1xl mt-3'>
          {userData ? `@${userData.username}` : ''}
          </p>
          <div className='flex items-center justify-around mt-3'>
            <div className='flex flex-col items-center mx-3'>
              <p className='text-white font-pragatiNarrow text-base'>{userData ? `${userData.unlock_video}` : ''}</p>
              <p className='text-white font-pragatiNarrow text-sm'>
                Unlocked video
              </p>
            </div>
            <div className='flex flex-col items-center mx-3'>
              <p className='text-white font-pragatiNarrow text-base'>{userData ? `${userData.current_level}` : ''}</p>
              <p className='text-white font-pragatiNarrow text-sm'>
                Current Level
              </p>
            </div>
          </div>
          <button className='text-white font-pragatiNarrow px-16 py-1 bg-none border-2 border-white rounded-xl mt-3'>
            Continue
          </button>
          <div className='flex items-center justify-around w-100 mt-3 w-full'>
            <button className='w-full flex items-center justify-end p-3 border-b-2 border-primary'>
              <div className='px-14'>
                <IconHistory />
              </div>
            </button>
            <button className='w-full flex items-center justify-start p-3'>
              <div className='px-14'>
                <IconHeart />
              </div>
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center w-full ps-4'>
          <div className='flex items-center justify-start flex-wrap w-fit'>
            <div className='relative m-2'>
              <div className='absolute bg-secondary w-full h-full opacity-80 flex items-center justify-center text-center'>
                <p className='text-white font-pragatiNarrow text-sm'>
                  Watch Video and Restart the Game
                </p>
              </div>
              <Image src={Img1} alt='Video Image' width={121} height={193} />
            </div>
            <div className='relative m-2'>
              <div className='absolute bg-secondary w-full h-full opacity-80 flex items-center justify-center text-center'>
                <p className='text-white font-pragatiNarrow text-sm'>
                  Watch Video
                </p>
              </div>
              <Image src={Img1} alt='Video Image' width={121} height={193} />
            </div>
            <div className='relative m-2'>
              <Image src={Img1} alt='Video Image' width={121} height={193} />
            </div>
            <div className='relative m-2'>
              <Image src={Img2} alt='Video Image' width={121} height={193} />
            </div>
            <div className='relative m-2'>
              <Image src={Img3} alt='Video Image' width={121} height={193} />
            </div>
          </div>
        </div>
      </div>
    </VideoLayout>
  );
}

export default Profil;
