import IconHome from '@/assets/logo/IconHome';
import IconProfile from '@/assets/logo/IconProfile';
import { Button } from '../atoms/button/button';
import { useState } from 'react';

interface VideoLayoutProps {
  children: React.ReactNode;
}

const VideoLayout: React.FC<VideoLayoutProps> = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [homeFill, setHomeFill] = useState('none');
  const [profileFill, setProfileFill] = useState('none');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === 'home') {
      setHomeFill('#FFC436');
      setProfileFill('white');
      const queryString = window.location.search;
      const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
      const language = languageMatch ? languageMatch[1] : 'eng';

      const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
      const idUser = idUserMatch ? idUserMatch[1] : null;
      window.location.href=`/videoScroll?language=${language}&id_user=${idUser}`;
    } else if (buttonName === 'profile') {
      setProfileFill('#FFC436');
      setHomeFill('white');
      const queryString = window.location.search;
      const languageMatch = queryString.match(/[\?&]language=([^&]+)/);
      const language = languageMatch ? languageMatch[1] : 'eng';

      const idUserMatch = queryString.match(/[\?&]id_user=([^&]+)/);
      const idUser = idUserMatch ? idUserMatch[1] : null;
      window.location.href=`/profil?language=${language}&id_user=${idUser}`;
    }
  };

  return (
    <main className='relative flex min-h-screen justify-between flex-col bg-secondary bg-no-repeat mx-auto max-w-md'>
      {children}
      <div
        className='w-full h-full flex items-center justify-around '
        style={{
          height: '10dvh',
        }}
      >
        <Button
          link='#'
          onClick={() => handleButtonClick('home')}
          style={{
            padding: '0',
            marginTop: '15px',
          }}
        >
          <div
            className='flex flex-col items-center justify-center'
            style={{
              fontSize: '7px',
            }}
          >
            <IconHome fill={homeFill} />
            <p className='font-pragatiNarrow text-primary m-0 h-fit'>Home</p>
          </div>
        </Button>
        <Button
          link='#'
          onClick={() => handleButtonClick('profile')}
          style={{
            padding: '0',
            marginTop: '15px',
          }}
        >
          <div
            className='flex flex-col items-center justify-center'
            style={{
              fontSize: '7px',
            }}
          >
            <IconProfile fill={profileFill} />
            <p className='font-pragatiNarrow text-primary m-0 h-fit'>Profile</p>
          </div>
        </Button>
      </div>
    </main>
  );
};

export default VideoLayout;
