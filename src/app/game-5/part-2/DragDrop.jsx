"use client"
import React, { useEffect, useState } from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import PictureInside from './PictureInside';
import Modal from '@/components/pop_up/alert';
import iconSuccess from '@/assets/images/berhasil.png';
import iconGagal from '@/assets/images/gagal.png';
import VideoLayout from '@/components/layout/videoLayout';

export default function DragDrop() {
  const initialPicturesList = [
    {
      id: 1,
      url: './Intersect-paru',
      width: '105px',
      height: "90px",
      isUsed: false,
    },
    {
      id: 2,
      url: './Intersect-1-paru',
      width: '104px',
      height: "112px",
      isUsed: false,
    },
    {
      id: 3,
      url: './Intersect-2-paru',
      width: '94px',
      height: "96px",
      isUsed: false,
    },
    {
      id: 4,
      url: './Intersect-3-paru',
      width: '95px',
      height: "90px",
      isUsed: false,
    },
    {
      id: 5,
      url: './Intersect-4-paru',
      width: '85px',
      height: '115px',
      float: 'float-right',
      isUsed: false,
    },
  ];

  const [picturesList, setPicturesList] = useState(initialPicturesList);
  const [board1, setBoard1] = useState(null);
  const [board2, setBoard2] = useState(null);
  const [board3, setBoard3] = useState(null);
  const [board4, setBoard4] = useState(null);
  const [board5, setBoard5] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalIcon, setModalIcon] = useState('');

  const [nextLevel, setNextLevel] = useState(null);

  const checkWinCondition = () => {
    const isAllUsed = picturesList.every((picture) => picture.isUsed);
    if (isAllUsed) {
      setNextLevel("/game-5/part-3");
      setShowModal(true);
      setModalIcon(iconSuccess);
      setModalTitle('GAME 5 CHAPTER 2');
      setModalMessage('Congratulations On Completing Game 5');
    }
  };

  useEffect(() => {
    checkWinCondition();
  }, [board1, board2, board3, board4, board5]);

  const resetPuzzle = () => {
    setBoard1(null);
    setBoard2(null);
    setBoard3(null);
    setBoard4(null);
    setBoard5(null);
    setPicturesList(initialPicturesList);
  };

  const markAsUsed = (id) => {
    setPicturesList((prevList) =>
      prevList.map((picture) =>
        picture.id === id ? { ...picture, isUsed: true } : picture
      )
    );
  };

  const [{ isOver: isOver1 }, drop1] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard1(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard2(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver3 }, drop3] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard3(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver4 }, drop4] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard4(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver5 }, drop5] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard5(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }), 
  }));

  const addImageToBoard1 = (id) => {
    const selectedPicture = picturesList.find((picture) => id === picture.id);
    if (id === 1) {
      setBoard1(selectedPicture);
      markAsUsed(id);
      checkWinCondition();
    } else {
      resetPuzzle();
      setNextLevel(null);
      setShowModal(true);
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
    }
  };

  const addImageToBoard2 = (id) => {
    const selectedPicture = picturesList.find((picture) => id === picture.id);
    if (id === 2) {
      setBoard2(selectedPicture);
      markAsUsed(id);
      checkWinCondition();
    } else {
      resetPuzzle();
      setNextLevel(null);
      setShowModal(true);
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
    }
  };

  const addImageToBoard3 = (id) => {
    const selectedPicture = picturesList.find((picture) => id === picture.id);
    if (id === 3) {
      setBoard3(selectedPicture);
      markAsUsed(id);
      checkWinCondition();
    } else {
      resetPuzzle();
      setNextLevel(null);
      setShowModal(true);
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
    }
  };

  const addImageToBoard4 = (id) => {
    const selectedPicture = picturesList.find((picture) => id === picture.id);
    if (id === 4) {
      setBoard4(selectedPicture);
      markAsUsed(id);
      checkWinCondition();
    } else {
      resetPuzzle();
      setNextLevel(null);
      setShowModal(true);
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
    }
  };

  const addImageToBoard5 = (id) => {
    const selectedPicture = picturesList.find((picture) => id === picture.id);
    if (id === 5) {
      setBoard5(selectedPicture);
      markAsUsed(id);
      checkWinCondition();
    } else {
      resetPuzzle();
      setNextLevel(null);
      setShowModal(true);
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
    }
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };


  return (
    <VideoLayout>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        message={modalMessage}
        title={modalTitle}
        icon={modalIcon}
        nextLevel={nextLevel}
      />
      <div>
        <h1 className='text-white text-2xl mt-10'>ASSEMBLE THE OBJECT PUZZLE</h1>
        <p className='text-white text-center'>Drag and Drop Puzzle</p>
      </div>
      <div className='w-full absolute flex justify-center mt-32 top-28 sm:top-10 sm:mt-32'>
        <div className='mx-auto relative'>
          <img src='./paru.png' className='mt-[5px] h-[205px]' alt='' />
          <div
            ref={drop1}
            className='z-10 w-10 h-10 top-[50px] left-[40px] absolute'
          ></div>
          <div
            ref={drop2}
            className='z-10 w-16 h-16 top-[120px] left-[20px] absolute'
          ></div>
          <div
            ref={drop3}
            className='z-10 w-10 h-10 top-[40px] right-[50px] absolute'
          ></div>
          <div
            ref={drop4}
            className='z-10 w-16 h-14 top-[100px] right-[25px] absolute'
          ></div>
          <div
            ref={drop5}
            className='z-20 w-20 h-16 top-[140px] right-[10px] absolute'
          ></div>
          <div className='absolute top-[7px] left-[0px]'>
            {/* <img src="./Intersect-paru.png" ref={drop1} alt="" className='z-0 w-[105px] h-[90px]'/> */}
            <div className='relative'>
              {board1 && (
                <PictureInside
                  url={board1.url}
                  width={board1.width}
                  height={board1.height}
                  key={board1.id}
                  id={board1.id}
                />
              )}
            </div>
          </div>
          <div className='absolute top-[97px] left-[1px]'>
            <div className='relative'>
              {/* <img src="./Intersect-1-paru.png" className='z-0 w-[104px] h-[112px]'/> */}
              {board2 && (
                <PictureInside
                  url={board2.url}
                  width={board2.width}
                  height={board2.height}
                  key={board2.id}
                  id={board2.id}
                />
              )}
            </div>
          </div>
          <div className='absolute top-[7px] left-[105px]'>
            <div className='relative'>
              {/* <img src="./Intersect-2-paru.png" ref={drop2} alt="" className='z-0 w-[94px] h-[96px]' /> */}
              {board3 && (
                <PictureInside
                  url={board3.url}
                  width={board3.width}
                  height={board3.height}
                  key={board3.id}
                  id={board3.id}
                  rotate={board3.rotate}
                />
              )}
            </div>
          </div>
          <div className='absolute top-[90.2px] left-[105px]'>
            <div className='relative'>
              {/* <img src="./Intersect-3-paru.png" className='z-0 w-[95px] h-[90px]'/> */}
              {board4 && (
                <PictureInside
                  url={board4.url}
                  width={board4.width}
                  height={board4.height}
                  key={board4.id}
                  id={board4.id}
                  rotate={board4.rotate}
                />
              )}
            </div>
          </div>
          <div className='absolute top-[98px] right-[0px]'>
            <div className='relative'>
              {/* <img src="./Intersect-4-paru.png" className='z-0 w-[85px] h-[115px] float-right'/> */}
              {board5 && (
                <PictureInside
                  url={board5.url}
                  width={board5.width}
                  height={board5.height}
                  float={board5.float}
                  key={board5.id}
                  id={board5.id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='pictures flex justify-center items-center bg-[#4D4D4D] absolute bottom-20 px-5 py-2 w-full sm:w-auto space-x-5'>
        {picturesList.map((picture) => (
          <Picture
            url={picture.isUsed ? `${picture.url}-bg` : `${picture.url}-border`}
            key={picture.id}
            id={picture.id}
          />
        ))}
      </div>
    </VideoLayout>
  );
}