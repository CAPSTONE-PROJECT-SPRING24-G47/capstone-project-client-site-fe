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
import Region from './Region';


const HomePage = () => {
  const { isPopUp } = useContext(NavContext);
  const handleSearch = (searchTerm) => {
    // Xử lý tìm kiếm ở đây
    console.log('Searching for:', searchTerm);
  };
  return (
    <main
      className={`relative flex h-full flex-col items-center justify-center bg-bg-color ${isPopUp ? 'bg-opacity-90' : ''}`}
    >
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[#03121A] opacity-30 backdrop-blur-[20px]" />
        <img src={fujiImage} alt="fuji" className="h-full object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="font-bold text-7xl mb-4 uppercase">Bắt đầu chuyến đi của bạn</h1>
          <button className="uppercase border rounded-3xl font-bold px-3 py-3 text-3xl bg-white text-[#7398D5] px-4 py-2 hover:bg-accent-color hover:text-white focus:outline-none focus:shadow-outline-blue">
            Lên kế hoạch
          </button>
        </div>
      </div>
      {/* Searchbar Component */}
      <div>
        <Searchbar onSearch={handleSearch} />
      </div>

      {/* Region Component */}
      <div>
        <Region />
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
