import { useContext } from 'react';
import { Wrapper } from './components/Auth';
import Navbar from './components/Navbar';
import { NavContext } from './Contexts/NavContext';

function App() {
  const { isPopUp } = useContext(NavContext);
  return (
    <div
      className={`relative flex h-screen items-center justify-center bg-red-200 ${isPopUp ? 'bg-opacity-90' : ''} bg-[url('./assets/2_rx7.jpg')]`}
    >
      <Navbar />

      <Wrapper />
    </div>
  );
}

export default App;
