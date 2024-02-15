//Homepage.jsx
import { useContext } from 'react';
import { NavContext } from '../Contexts/NavContext';
import fujiImage from '../assets/fuji.jpg';
import Footer from './Footer';
import Searchbar from './Searchbar';
import Outstandingactivity from './Outstandingactivity';
import Outstandingrestaurant from './Outstandingrestaurant';
import Outstandingresidence from './Outstandingresidence';
import Outstandingblog from './Outstandingblog';
import GoogleMap from './GoogleMap';


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
      {/* Searchbar Component */}
      <div>
      <Searchbar />
      </div>

      {/* Section Component */}
      <div>
      <GoogleMap />
      </div>

      {/* Outstanding activity Component */}
      <div>
      <Outstandingactivity />
      </div>

      {/* Outstandingrestaurant Component */}
      <div>
      <Outstandingrestaurant />
      </div>

      {/* Outstandingresidence Component */}
      <div>
      <Outstandingresidence />
      </div>

      {/* Outstandingblog Component */}
      <div>
      <Outstandingblog />
      </div>

      {/* Footer Component */}
      <div>
      <Footer />
      </div>
     
    </main>
  );
};

export default HomePage;
