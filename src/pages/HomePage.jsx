import { useContext } from 'react';
import { NavContext } from '../Contexts/NavContext';
import fujiImage from '../assets/fuji.jpg';

const HomePage = () => {
  const { isPopUp } = useContext(NavContext);

  return (
    <main
      className={`relative flex h-full flex-col items-center justify-center bg-bg-color ${isPopUp ? 'bg-opacity-90' : ''}`}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[#03121A] opacity-30 backdrop-blur-[20px]" />
        <img src={fujiImage} alt="fuji" className="h-full object-cover" />
      </div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
      <div>Section</div>
    </main>
  );
};

export default HomePage;
