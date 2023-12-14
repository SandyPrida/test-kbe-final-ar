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
      url: './icon-park_heart',
      width: '25px',
      left: '0px',
      top: '0px',
    },
    {
      id: 2,
      url: './healthicons_kidneys-outline',
      width: '25px',
      left: '0px',
      top: '0px',
    },
    {
      id: 3,
      url: './mdi_lungs',
      width: '20px',
      left: '10px',
      top: '2px',
    },
    {
      id: 4,
      url: './Mask group',
      width: '15px',
      left: '2px',
      top: '2px',
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
      setNextLevel("/akhir");
      setShowModal(true);
      setModalIcon(iconSuccess);
      setModalTitle('GAME 5 CHAPTER 5');
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
      <h1 className='text-white text-2xl mt-7 text-center sm:text-xl'>
        HELP ME INSTALL THE BODY
      </h1>
      <h1 className='text-white text-2xl mt-2 sm:text-xl'>
        ORGANS IN THEIR PROPER PLACE
      </h1>
      <div className='w-full relative flex justify-center'>
        <div className='mx-auto relative'>
          <img
            src='./skeleton.png'
            className='mt-[5px] h-[450px] sm:h-[400px]'
            alt=''
          />
          <div
            ref={drop1}
            className='z-10 w-[20px] h-[20px] top-[135px] left-[130px] sm:top-[120px] sm:left-[115px] absolute border border-[#FFC436] bg-[#FFC436] bg-opacity-30'
          >
            {/* <img src="./icon-park_heart.png" ref={drop1} alt="" className='z-0 w-[25px] absolute h-auto'/> */}
            {board1 && (
              <PictureInside
                url={board1.url}
                width={board1.width}
                left={board1.left}
                top={board1.top}
                key={board1.id}
                id={board1.id}
              />
            )}
          </div>
          <div
            ref={drop2}
            className='z-10 w-[20px] h-[20px] top-[165px] left-[117px] sm:top-[145px] sm:left-[102px] absolute border border-[#FFC436] bg-[#FFC436] bg-opacity-30'
          >
            {/* <img src="./healthicons_kidneys-outline.png" ref={drop1} alt="" className='z-0 w-[25px] absolute h-auto'/> */}
            {board2 && (
              <PictureInside
                url={board2.url}
                width={board2.width}
                left={board2.left}
                top={board2.top}
                key={board2.id}
                id={board2.id}
              />
            )}
          </div>
          <div
            ref={drop3}
            className='z-10 w-[42px] h-[26px] top-[100px] left-[103px] sm:top-[90px] sm:left-[90px] absolute border border-[#FFC436] bg-[#FFC436] bg-opacity-30'
          >
            {/* <img src="./mdi_lungs.png" ref={drop1} alt="" className='z-0 w-[20px] absolute left-[10px] top-[2px] h-auto'/> */}
            {board3 && (
              <PictureInside
                url={board3.url}
                width={board3.width}
                left={board3.left}
                top={board3.top}
                key={board3.id}
                id={board3.id}
              />
            )}
          </div>
          <div
            ref={drop4}
            className='z-10 w-[20px] h-[20px] top-[47px] sm:top-[38px] left-[125px] sm:left-[110px] absolute border border-[#FFC436] bg-[#FFC436] bg-opacity-30'
          >
            {/* <img src="./Mask group.png" ref={drop1} alt="" className='z-0 w-[15px] absolute left-[2px] top-[2px] h-auto'/> */}
            {board4 && (
              <PictureInside
                url={board4.url}
                width={board4.width}
                left={board4.left}
                top={board4.top}
                key={board4.id}
                id={board4.id}
              />
            )}
          </div>
        </div>
      </div>
      <div className='pictures flex justify-center items-center'>
        {picturesList.map((picture) => {
          let shouldRender = true;

          // Define an array of boards
          const boards = [board1, board2, board3, board4, board5];

          // Check if the picture is on any board
          boards.forEach((board) => {
            if (board && picture.id === board.id) {
              shouldRender = false;
            }
          });

          return (
            <div key={picture.id} className='p-3 mx-[4px] w-14 sm:w-16 h-14 sm:h-16 flex justify-center items-center border-2 border-[#FFC436] bg-[#2c1c0c]'>
                {shouldRender && <Picture url={picture.url} id={picture.id} />}
            </div>
          );
        })}
      </div>
    </VideoLayout>
  );
}
