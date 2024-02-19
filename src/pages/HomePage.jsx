//Homepage.jsx
import { useContext } from 'react';
import { NavContext } from '../Contexts/NavContext';
import fujiImage from '../assets/fuji.jpg';
import Footer from '../components/Footer';
import Searchbar from '../components/Home/Searchbar';
import OutstandingActivity from '../components/Home/OutstandingActivity';
import OutstandingRestaurant from '../components/Home/OutstandingRestaurant';
import OutstandingResidence from '../components/Home/OutstandingResidence';
import OutstandingBlog from '../components/Home/OutstandingBlog';
import Region from '../components/Home/Region';

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
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[#03121A] opacity-30 backdrop-blur-[20px]" />
        <img src={fujiImage} alt="fuji" className="h-full object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-4 text-7xl font-bold uppercase">
            Bắt đầu chuyến đi của bạn
          </h1>
          <button className="focus:shadow-outline-blue rounded-3xl border bg-white px-3 px-4 py-2 py-3 text-3xl font-bold uppercase text-[#7398D5] hover:bg-accent-color hover:text-white focus:outline-none">
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
        <OutstandingActivity />
      </div>

      {/* Outstandingrestaurant Component */}
      <div>
        <OutstandingRestaurant />
      </div>

      {/* Outstandingresidence Component */}
      <div>
        <OutstandingResidence />
      </div>

      {/* Outstandingblog Component */}
      <div>
        <OutstandingBlog />
      </div>

      {/* Footer Component */}
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
