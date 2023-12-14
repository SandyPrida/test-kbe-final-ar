'use client';

import VideoLayout from '@/components/layout/videoLayout';
import Image from 'next/image';
import bone from '../../assets/game-4/bone.png';
import GameFourHeader from '@/assets/logo/GameFourHeader';
import ExclamationMark from '../../assets/logo/ExclamationMark';
import { useState, useEffect } from 'react';
import Modal from '@/components/pop_up/alert';
import iconSuccess from '@/assets/images/berhasil.png';
import iconGagal from '@/assets/images/gagal.png';
import { useRef } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';

function Game4() {

  const [countdownVisible, setCountdownVisible] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [showStartText, setShowStartText] = useState(false);

  const introContainerRef = useRef(null);
  

    useEffect(() => {
  const intro = introJs();

    // Initialize Intro.js
    intro.setOptions({
      steps: [
        {
          element: introContainerRef.current,
          intro: 'Please click the icon below and it will appear in the highlighted box',
        },
        // Add more steps as needed
      ],
      tooltipClass: 'custom-tooltip-class', // Add a custom class for styling
      buttonClass: 'custom-button-class',
      showStepNumbers: false,
      overlayOpacity: 0.5,
      showBullets: false,
      nextLabel: '<i class="fa fa-arrow-right"></i>',
      prevLabel: '<i class="fa fa-arrow-left"></i>',
      doneLabel: '<i class="fa fa-check"></i>',
    });

    // Start Intro.js
    intro.start();

    intro.oncomplete(() => {
    setIntroCompleted(true);
    setCountdownVisible(true);
  });

    // Cleanup on component unmount
    return () => {
      intro.exit();
    };
  }, []);

  useEffect(() => {
    if (introCompleted) {
      setCountdownVisible(true);

      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Set a timeout to hide the countdown after 3 seconds
      const hideCountdownTimeout = setTimeout(() => {
        setCountdownVisible(false);
        clearInterval(countdownInterval);
        setCountdown(0); // Set to 0 after the countdown completes
        setShowStartText(true); // Set to true after the countdown completes
      }, 4000);

      // Cleanup intervals and timeouts on component unmount
      return () => {
        clearInterval(countdownInterval);
        clearTimeout(hideCountdownTimeout);
      };
    }
  }, [introCompleted]);


  const intro2 = introJs();

  useEffect(() => {

    // Initialize Intro.js
    intro2.setOptions({
      steps: [
        {
          element: introContainerRef.current,
          intro: 'Drag and drop the correct answer in the column above',
        },
        // Add more steps as needed
      ],
      tooltipClass: 'custom-tooltip-class', // Add a custom class for styling
      buttonClass: 'custom-button-class', 
      showStepNumbers: false,
      overlayOpacity: 0.5,
      showBullets: false,
      nextLabel: '<i class="fa fa-arrow-right"></i>',
      prevLabel: '<i class="fa fa-arrow-left"></i>',
      doneLabel: '<i class="fa fa-check"></i>',
    });

    // Start Intro.js
    // intro.start();

    // Cleanup on component unmount
    return () => {
      intro2.exit();
    };
  }, [intro2]);
  const startIntro = () => {
    intro2.start();
  };

  const [correctAnswer, setCorrectAnswer] = useState([
    'Shoulder Blade',
    'Upper Arm',
    'Ulna',
    'Radius',
    'Palm Bone',
  ]);

  const [inputValues, setInputValues] = useState(['', '', '', '', '']);

  const [h1Values, setH1Values] = useState([
    { name: 'Shoulder Blade', status: '' },
    { name: 'Kidney', status: '' },
    { name: 'Palm Bone', status: '' },
    { name: 'Ulna', status: '' },
    { name: 'Upper Arm', status: '' },
    { name: 'Radius', status: '' },
  ]);

  const [isAllCorrect, setIsAllCorrect] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalIcon, setModalIcon] = useState('');
  const [nextLevel, setNextLevel] = useState(null)

  const checkAnswers = () => {
    const areAllCorrect = correctAnswer.every(
      (answer, index) => answer === inputValues[index]
    );
    if(areAllCorrect) {
      setModalIcon(iconSuccess);
      setModalTitle('GAME 1 COMPLETE');
      setModalMessage('Congratulations On Completing Game 1');
      setNextLevel('videoScroll4');
    } else {
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  //buat button next
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  const checkAllInputsFilled = () => {
    const isFilled = inputValues.every((value) => value !== '');
    setAllInputsFilled(isFilled);
  };

  useEffect(() => {
    checkAllInputsFilled();
  }, [inputValues]);
  //penutup

  const handleDragOver = (e, index) => {
    e.preventDefault();
    console.log('dragOver');
  };

  const handleDragOver1 = (e, index) => {
    e.preventDefault();
    console.log('dragOver1');
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    console.log("drop");
    // Cek apakah input pada index tersebut sudah memiliki nilai
    if (inputValues[index]) return; // Jika sudah, tidak melakukan apa-apa

    const draggedText = e.dataTransfer.getData('text/plain');
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = draggedText;
    setInputValues(updatedInputValues);

    const indexh1 = h1Values.findIndex((value) => value.name === draggedText);

    const updatedH1Values = [...h1Values];
    updatedH1Values[indexh1].status = 'invisible';
    setH1Values(updatedH1Values);
  };

  const handleDrop1 = (e) => {
    e.preventDefault();
    console.log("drop1");
    const droppedValue = e.dataTransfer.getData('text/plain');
    
    // Cari nilai yang di-drop di dalam h1Values
    const index = h1Values.findIndex((value) => value.name === droppedValue);
    console.log(index);
  
    if (index !== -1) {
      // Jika nilai ditemukan, ubah statusnya menjadi 'invisible'
      const updatedValues = [...h1Values];
      updatedValues[index] = { ...updatedValues[index], status: '' };
      setH1Values(updatedValues);
    }
  };

  const handleDragStart = (e, name) => {
    e.dataTransfer.setData('text/plain', name);
    console.log(name);
  };

  const handleDragStart1 = (e, name, index, id) => {
    e.dataTransfer.setData('text/plain', name);
    
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.value = '';
    }
    
    const updatedInputValues = [...inputValues]; // Membuat salinan array inputValues
    updatedInputValues[index] = ''; // Mengubah nilai pada indeks tertentu menjadi string kosong
    setInputValues(updatedInputValues);
  };

  const handleButtonClick = () => {
    checkAnswers();
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
      <div className='' style={{}}>
        {/* <h1 className='uppercase text-primary font-dragonSlayer font-[400] font-'>
          Help me find the right one, please!
        </h1> */}
        <div className='flex items-center justify-center mt-6 relative'>
          <button className='absolute right-10 top-5' onClick={startIntro}>
            <ExclamationMark />
          </button>
          <GameFourHeader />
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <Image src={bone} alt='' className='h-96 w-auto' style={{
              transform: 'translateX(-90px)',
            }} />
          </div>
          <div className='relative flex flex-col h-full'>
            {inputValues.map((value, index) => {
              let topVal = '0px';
              let leftVal = '0px';
              if (index === 0) {
                topVal = '-168px';
                leftVal = '-97px';
              } else if (index == 1) {
                topVal = '-48px';
                leftVal = '-126px';
              } else if (index == 2) {
                topVal = '16px';
                leftVal = '-95px';
              } else if (index == 3) {
                topVal = '65px';
                leftVal = '-95px';
              } else if (index == 4) {
                topVal = '116px';
                leftVal = '-125px';
              }
              return (
                <input
                  className={`${
                    value ? 'bg-primary' : 'bg-secondary'
                  } absolute text-center w-40 h-10 font-pragatiNarrow text-white rounded-lg p-3 m-2 border-2 border-primaryActive`}
                  style={{
                    top: topVal,
                    left: leftVal,
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
                  }}
                  key={index}
                  type='text'
                  id={`input${index}`}
                  value={value}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onChange={(e) => {
                    const updatedInputValues = [...inputValues];
                    updatedInputValues[index] = e.target.value;
                    setInputValues(updatedInputValues);
                  }}
                  disabled={value !== ''} // Nonaktifkan input jika sudah memiliki nilai
                  readOnly='true'
                  draggable='true'
                  onDragStart={(e) => handleDragStart1(e, e.target.value, index, `input${index}`)} // Pass value.name as text/plain data
                />
              );
            })}
          </div>
        </div>
        <div 
          className='flex flex-wrap items-center justify-around border-2 border-primary rounded-lg p-2'
          
          onDragOver={handleDragOver1}
          onDrop={(e) => handleDrop1(e)}
          onChange={(e) => {
            const updatedInputValues = [...inputValues];
            updatedInputValues[index] = e.target.value;
            setInputValues(updatedInputValues);
          }}
        >
          {h1Values.map((value, index) => (
            <div ref={introContainerRef}
              className={`bg-primary ${value.status} cursor-grab font-pragatiNarrow text-white rounded-lg p-2 m-2`} // Use value.status instead of value[status]
              draggable='true'
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
              }}
              onDragStart={(e) => handleDragStart(e, value.name)} // Pass value.name as text/plain data
              key={index}
            >
              <p className='text-white text-sm'>{value.name}</p>{' '}
              {/* Display value.name */}
            </div>
          ))}
        </div>
        {allInputsFilled && (
          <div className='w-full px-2 flex items-center justify-center'>
            <button
              onClick={handleButtonClick}
              className='px-8 w-full p-3 bg-primary text-secondary rounded-lg my-3'
            >
              Submit
            </button>
          </div>
        )}
      </div>
      {countdownVisible && (
        <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-6xl font-bold p-4 rounded-lg text-center" style={{ alignItems: 'center',justifyContent: 'center'}}>
          {countdown === 0 ? "START" : countdown}
        </div>
      )}
    </VideoLayout>
  );
}

export default Game4;
