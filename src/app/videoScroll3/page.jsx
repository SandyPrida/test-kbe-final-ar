'use client';

import React, { useState, useRef, useEffect } from 'react';
import VideoLayout from '@/components/layout/videoLayout';
import { useRouter } from '../../../node_modules/next/navigation';
import Image from 'next/image';
import IconLike from '../../assets/logo/IconLike';
// import Vid1 from '../../assets/videos/Vid1.mp4';
import IconShare from '../../assets/logo/IconShare';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';

function VideoScrool() {
  const router = useRouter();

  const Videos = [
    {
      video: '/videos/Vid1.mp4',
      like: '123',
      judul: 'Level 1',
      subJudul: 'apakah kalian menyukai basket? #health #body #game1',
      links: [
        {
          wa: 'awd',
          fb: 'awd',
          emai: 'awd',
        },
      ],
    },
    {
      video: '/videos/Vid2.mp4',
      like: '123',
      judul: 'Level 1',
      subJudul: 'apakah kalian menyukai basket? #health #body #game1',
      links: [
        {
          wa: 'awd',
          fb: 'awd',
          emai: 'awd',
        },
      ],
    },
    {
      video: '/videos/Vid3.mp4',
      like: '123',
      judul: 'Level 1',
      subJudul: 'apakah kalian menyukai basket? #health #body #game1',
      links: [
        {
          wa: 'awd',
          fb: 'awd',
          emai: 'awd',
        },
      ],
    },
    {
      video: Img3,
      like: '123',
      judul: 'Level 1',
      subJudul: 'apakah kalian menyukai basket? #health #body #game1',
      links: [
        {
          wa: 'awd',
          fb: 'awd',
          emai: 'awd',
        },
      ],
    },
  ];

  const [dragging, setDragging] = useState(false); // Untuk membaca pergerakan cursor di set false karena dibacanya ketika di klik dan tahan
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);
  const containerRef = useRef(null);
  const [video, setVideo] = useState(0);

  // Handle pas klik nang divnya
  const handleMouseDown = (e) => {
    setDragging(true);
    setStartY(e.pageY);
    setStartScrollTop(containerRef.current.scrollTop);
  };

  const handleTouchDown = (e) => {
    setDragging(true);
    setStartY(e.touches[0].pageY);
    setStartScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const deltaY = e.pageY - startY;
    const vidActive = video;
    const containerHeight = containerRef.current.clientHeight;

    if (deltaY > 5 && vidActive > 0) {
      console.log('Besar');
      setVideo(vidActive - 1);
      setDragging(false);
      const scrollTo = (vidActive - 1) * containerHeight;
      containerRef.current.scrollTo({ top: scrollTo, behavior: 'smooth' }); // Scroll ke video sebelumnya
    } else if (deltaY < -5 && vidActive < Videos.length - 1) {
      console.log('Kecil');
      setVideo(vidActive + 1);
      setDragging(false);
      const scrollTo = (vidActive + 1) * containerHeight;
      containerRef.current.scrollTo({ top: scrollTo, behavior: 'smooth' }); // Scroll ke video berikutnya
    }
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const deltaY = e.touches[0].pageY - startY;
    const vidActive = video;
    const containerHeight = containerRef.current.clientHeight;

    if (deltaY > 5 && vidActive > 0) {
      console.log('Besar');
      setVideo(vidActive - 1);
      setDragging(false);
      const scrollTo = (vidActive - 1) * containerHeight;
      containerRef.current.scrollTo({ top: scrollTo, behavior: 'smooth' }); // Scroll ke video sebelumnya
    } else if (deltaY < -5 && vidActive < Videos.length - 1) {
      console.log('Kecil');
      setVideo(vidActive + 1);
      setDragging(false);
      const scrollTo = (vidActive + 1) * containerHeight;
      containerRef.current.scrollTo({ top: scrollTo, behavior: 'smooth' }); // Scroll ke video berikutnya
    }
  };

  // handle pas di lepaskan dari klik
  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleTouchUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (video === 3) {
      console.log('testing');
      const queryString = window.location.search;
      const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
      const language = languageMatch ? languageMatch[1] : 'eng';

      const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
      const idUser = idUserMatch ? idUserMatch[1] : null;
      setTimeout(() => {
        // Eksekusi navigasi setelah penundaan 2 detik
        router.push(`/game-4?language=${language}&id_user=${idUser}`);
      }, 1000);
    }
  }, [video])

  return (
    <VideoLayout>
      <div
        className='w-full flex flex-col overflow-hidden items-center justify-start snap-mandatory snap-y'
        style={{
          height: '90dvh',
          cursor: dragging ? 'grabbing' : 'grab',
          scrollBehavior: 'smooth',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchUp}
        onTouchCancel={handleTouchUp}
        ref={containerRef}
      >
        {Videos.map((level, index) => (
          <div
            key={index}
            id={`Video${index}`}
            className='h-full w-full snap-start cursor-grab'
            style={{
              height: '90dvh',
              // background: 'red',
              // border: '1px solid green',
            }}
          >
            <div
              className='relative'
              style={{
                height: '90dvh',
                opacity: index == 3 ? '0' : '1',
              }}
            >
              <video autoPlay controls loop muted
              controlsList="nodownload nofullscreen noremoteplayback"
                src={level.video}
                id='img1'
                draggable='false'
                alt='Video Image'
                className='h-full w-full object-cover {}'
                style={
                  {
                    // height: 'auto',
                  }
                }
                priority
              ></video>
              <div className='absolute bottom-12 not-scroll'>
                {/* <video width='640' height='360' controls>
                  <source src={Vid1} type='video/mp4' />
                  Your browser does not support the video tag.
                </video> */}
                <div className='w-full flex items-end justify-between px-4'>
                  <div className='flex flex-col w-3/4'>
                    <h3 className='text-white'>{level.judul}</h3>
                    <p className='text-white'>{level.subJudul}</p>
                  </div>
                  <div className='flex flex-col justify-center items-end w-auto mb-10'>
                    <button className='flex flex-col items-center justify-center'>
                      <IconLike className='w-20' />
                      <p className='text-white text-center'>{level.like}</p>
                    </button>
                    <br />
                    <br />
                    <button className='button flex flex-col justify-center items-center'>
                      <IconShare />
                      <p className='text-white text-center'>Share</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VideoLayout>
  );
}

export default VideoScrool;
