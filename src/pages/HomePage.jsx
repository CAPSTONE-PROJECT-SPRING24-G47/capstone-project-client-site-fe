import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Wrapper } from '../components/Auth';
import { NavContext } from '../Contexts/NavContext';

const HomePage = () => {
  const { isPopUp } = useContext(NavContext);
  return (
    <main
      className={`relative flex h-screen items-center justify-center bg-bg-color ${isPopUp ? 'bg-opacity-90' : ''} bg-[url('./assets/fuji.jpg')]`}
    >
      <Navbar />
      <Wrapper />
    </main>
  );
};

export default HomePage;
