'use client';

import VideoLayout from '@/components/layout/videoLayout';
import Image from 'next/image';
import tulang from '../../assets/game-1/tulang.png';
import otak from '../../assets/game-1/otak.png';
import badan from '../../assets/game-1/badan.png';
import hati from '../../assets/game-1/hati.png';
import BodyGif from '../../assets/game-1/BodyGif.gif';
import BrainGif from '../../assets/game-1/BrainGif.gif';
import HeartGif from '../../assets/game-1/HeartGif.gif';
import SpineGif from '../../assets/game-1/SpineGif.gif';
import GameOneHeader from '@/assets/logo/GameOneHeader';
import ExclamationMark from '@/assets/logo/ExclamationMark';
import { useState, useEffect } from 'react';
import Modal from '@/components/pop_up/alert';
import iconSuccess from '@/assets/images/berhasil.png';
import iconGagal from '@/assets/images/gagal.png';
import { useRef } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';

function Game1() {
  const [countdownVisible, setCountdownVisible] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [showStartText, setShowStartText] = useState(false);

  const introContainerRef = useRef(null);
  const introContainer2Ref = useRef(null);
  

    useEffect(() => {
  const intro = introJs();

    // Initialize Intro.js
    intro.setOptions({
      steps: [
        {
          element: introContainerRef.current,
          intro: 'Please click the icon below and it will appear in the highlighted box',
        },
        {
          element: introContainer2Ref.current,
          intro: 'Open the dropdown to select the correct answer',
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
          intro: 'Please click the icon below and it will appear in the highlighted box',
        },
        {
          element: introContainer2Ref.current,
          intro: 'Open the dropdown to select the correct answer',
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
    'gmbr11',
    'gmbr22',
    'gmbr33',
    'gmbr44',
  ]);

  const [selectedGif, setSelectedGif] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [nextLevel, setNextLevel] = useState(null)

  const SelectOptions = [
    {
      image: badan,
      gif: BodyGif,
      values: [
        { value: '', label: 'Choose One' },
        { value: 'gmbr11', label: 'Managing eye vision' },
        { value: 'gmbr12', label: 'Governing sight coordination' },
        { value: 'gmbr13', label: 'Controlling eye movements.' },
        { value: 'gmbr14', label: 'Directing eye motion 4' },
      ],
    },
    {
      image: otak,
      gif: BrainGif,
      values: [
        { value: '', label: 'Choose One' },
        { value: 'gmbr21', label: 'Memory Processing' },
        { value: 'gmbr22', label: 'Memory Retrieval' },
        { value: 'gmbr23', label: 'Memory Storage' },
        { value: 'gmbr24', label: 'Memory Forgetting' },
      ],
    },
    {
      image: hati,
      gif: HeartGif,
      values: [
        { value: '', label: 'Choose One' },
        { value: 'gmbr31', label: 'Transmitting sensory information' },
        { value: 'gmbr32', label: 'Distributing motor impulses' },
        { value: 'gmbr33', label: 'Relaying sensory-motor cues' },
        { value: 'gmbr34', label: 'Conveying sensory and motor signals' },
      ],
    },
    {
      image: tulang,
      gif: SpineGif,
      values: [
        { value: '', label: 'Choose One' },
        { value: 'gmbr41', label: 'Shielding of organs' },
        { value: 'gmbr42', label: 'Protection of organs' },
        { value: 'gmbr43', label: 'Defense of internals' },
        { value: 'gmbr44', label: 'Guarding inner parts' },
      ],
    },
  ];

  const [selectedValues, setSelectedValues] = useState({
    select1: '',
    select2: '',
    select3: '',
    select4: '',
  });

  useEffect(() => {
    // Check if all select values are filled
    const isAllSelected = Object.values(selectedValues).every(
      (value) => value !== ''
    );
    const selectedValuesArray = Object.values(selectedValues);

    // Check if selectedValuesArray is equal to correctAnswer
    const isCorrect =
      JSON.stringify(selectedValuesArray) === JSON.stringify(correctAnswer);
    
    if (isCorrect) {
      setNextLevel('videoScroll1');
      console.log(nextLevel)
    } else {
      setNextLevel(null);
      console.log(nextLevel);
    }
    // You can change this condition based on your requirement
    // In this example, the button will be enabled if all selects have a value
    if (isAllSelected) {
      // Enable your button or perform any other action
    }
  }, [selectedValues, nextLevel]);

  const handleChange = (event, selectName) => {
    setSelectedValues({
      ...selectedValues,
      [selectName]: event.target.value,
    });
  };

  const checkAnswers = () => {
    // Convert selectedValues into an array of values
    const selectedValuesArray = Object.values(selectedValues);

    // Check if selectedValuesArray is equal to correctAnswer
    const isCorrect =
      JSON.stringify(selectedValuesArray) === JSON.stringify(correctAnswer);

    if (isCorrect) {
      // If correct, show an alert
      // alert('Correct answer!');
      setModalIcon(iconSuccess);
      setModalTitle('GAME 1 COMPLETE');
      setModalMessage('Congratulations On Completing Game 1');
    } else {
      // If not correct, you can show a different message or handle it as needed
      // alert('Incorrect answer. Try again.');
      setModalIcon(iconGagal);
      setModalTitle('FAILED GAME');
      setModalMessage('Incorrect Answer. Try again !');
      setSelectedGif(null);
      setSelectedImg(null);
      const selectedValue = {
        select1: '',
        select2: '',
        select3: '',
        select4: '',
      };
      setSelectedValues(selectedValue);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  const handleSelectedGif = (index) => {
    const gif = SelectOptions[index].gif;
    const img = SelectOptions[index].image;
    setSelectedGif(gif);
    setSelectedImg(img);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalIcon, setModalIcon] = useState('');

  return (
    <VideoLayout>
      {/* <h1 className='uppercase text-primary'>Select the correct Answer</h1> */}
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        message={modalMessage}
        title={modalTitle}
        icon={modalIcon}
        nextLevel={nextLevel}
      />
      <div className='w-100 flex flex-col items-center justify-center relative'>
        <button className='absolute right-0' onClick={startIntro}>
          <ExclamationMark />
        </button>
        <div className='mt-14'>
          <GameOneHeader />
        </div>
      </div>
      <div className='flex items-center justify-center my-5'>
        <div className='relative top-0 right-0 flex items-center justify-center border-2 border-primary rounded-lg p-3 w-4/5'>
          {selectedGif !== null ? (
            <Image src={selectedGif} className='h-52 w-auto' alt='img' />
          ) : (
            <Image src={BrainGif} className='h-52 w-auto opacity-0' alt='img' />
          )}
          <div ref={introContainerRef} className='absolute flex items-center justify-center top-[-1px] right-[-1px] w-16 h-16 p-3 border-2 border-primary rounded-lg'>
            {selectedImg !== null && (
              <Image src={selectedImg} className='w-auto h-full' alt='img' />
            )}
          </div>
        </div>
      </div>
      <div className='w-100 flex flex-wrap items-center justify-center'>
        {SelectOptions.map((option, index) => (
          <div className='w-32 sm:w-48 p-4' key={index}>
            <button
              onClick={() => handleSelectedGif(index)}
              className='w-full flex items-center justify-center border-2 border-primary rounded-lg p-4'
            >
              <Image
                src={option.image}
                className='h-14 w-auto'
                alt={`img-${option.image}`}
              />
            </button>
            <select ref={introContainer2Ref}
              className='block w-full text-white px-4 py-1 border border-primary rounded-lg shadow leading-tight mt-4 bg-secondary'
              value={selectedValues[`select${index + 1}`]}
              onChange={(event) => handleChange(event, `select${index + 1}`)}
            >
              {option.values.map((item, itemIndex) => (
                <option key={itemIndex} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        {/* <div>
          <Image src={badan} className='w-10' alt='' />
          <select
            className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500'
            value={selectedValues.select1}
            onChange={(event) => handleChange(event, 'select1')}
          >
            <option value=''>Pilih sesuatu</option>
            <option value='gmbr11'>Opsi 1</option>
            <option value='gmbr12'>Opsi 2</option>
            <option value='gmbr13'>Opsi 3</option>
            <option value='gmbr14'>Opsi 4</option>
          </select>
        </div>
        <div>
          <Image src={otak} className='w-10' alt='' />
          <select
            className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500'
            value={selectedValues.select2}
            onChange={(event) => handleChange(event, 'select2')}
          >
            <option value=''>Pilih sesuatu</option>
            <option value='gmbr21'>Opsi 1</option>
            <option value='gmbr22'>Opsi 2</option>
            <option value='gmbr23'>Opsi 3</option>
            <option value='gmbr24'>Opsi 4</option>
          </select>
        </div>
        <div>
          <Image src={hati} className='w-10' alt='' />
          <select
            className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500'
            value={selectedValues.select3}
            onChange={(event) => handleChange(event, 'select3')}
          >
            <option value=''>Pilih sesuatu</option>
            <option value='gmbr31'>Opsi 1</option>
            <option value='gmbr32'>Opsi 2</option>
            <option value='gmbr33'>Opsi 3</option>
            <option value='gmbr34'>Opsi 4</option>
          </select>
        </div>
        <div>
          <Image src={tulang} className='w-10' alt='' />
          <select
            className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500'
            value={selectedValues.select4}
            onChange={(event) => handleChange(event, 'select4')}
          >
            <option value=''>Pilih sesuatu</option>
            <option value='gmbr41'>Opsi 1</option>
            <option value='gmbr42'>Opsi 2</option>
            <option value='gmbr43'>Opsi 3</option>
            <option value='gmbr44'>Opsi 4</option>
          </select>
        </div> */}
        {/* ... Add similar code for the other selects */}
      </div>
      {/* You can add your button here, and conditionally enable/disable it based on your requirements */}
      {Object.values(selectedValues).every((value) => value !== '') ? (
        <button
          className='bg-primary w-100 rounded-lg py-4 my-3'
          onClick={checkAnswers}
        >
          <h1 className='text-secondary font-dragonSlayer font-extrabold text-2xl'>
            NEXT
          </h1>
        </button>
      ) : null}

  {countdownVisible && (
        <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-6xl font-bold p-4 rounded-lg text-center" style={{ alignItems: 'center',justifyContent: 'center'}}>
          {countdown === 0 ? "START" : countdown}
        </div>
      )}
    </VideoLayout>
  );
}

export default Game1;
