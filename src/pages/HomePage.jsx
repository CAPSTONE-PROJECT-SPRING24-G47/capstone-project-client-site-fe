import { useContext } from 'react';
import { motion } from 'framer-motion';
import { NavContext } from '../Contexts/NavContext';
import fujiImage from '../assets/fuji.jpg';
import Searchbar from '../components/Home/Searchbar';
import OutstandingBlog from '../components/Home/OutstandingBlog';
import OutstandingSection from '../components/Home/OutstandingSection';
import {
  residences,
  restaurants,
  activities,
} from '../components/Home/TestData';
import { useNavigate } from 'react-router-dom';
import { fetchUserFromLocalStorage } from '../utils/fetchUserFromLocalStorage';

const HomePage = () => {
  const { setIsPopUp, isPopUp } = useContext(NavContext);
  const user = fetchUserFromLocalStorage();
  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    // Xử lý tìm kiếm ở đây
    console.log('Searching for:', searchTerm);
  };
  return (
    <>
      <header className="relative">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[#03121A] opacity-30 backdrop-blur-[20px]" />
          <img
            src={fujiImage}
            alt="fuji"
            className="h-full object-cover shadow-md"
          />

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex w-full flex-col items-center justify-center text-bg-color"
          >
            <h1 className="mb-5 text-6xl font-bold uppercase">
              Bắt đầu chuyến đi của bạn
            </h1>
            <div
              onClick={() => {
                if (!user) {
                  setIsPopUp(true);
                  return;
                }
                navigate('/trip-builder');
              }}
              className="focus:shadow-outline-blue cursor-pointer rounded-full bg-bg-color px-3 py-2 text-xl font-bold uppercase text-accent-color hover:bg-accent-color hover:text-bg-color focus:outline-none"
            >
              Lên kế hoạch
            </div>
          </motion.div>
        </div>
      </header>
      <main
        className={`relative bg-bg-color py-24 ${isPopUp ? 'bg-opacity-90' : ''}`}
      >
        {/* Searchbar Component */}
        <div className="absolute -top-[2%] w-full">
          <Searchbar onSearch={handleSearch} />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center px-24">
          {/* Outstanding activity Component */}
          <div className="w-full">
            <OutstandingSection
              data={activities}
              type={'Hoạt động giải trí nổi bật'}
            />
          </div>

          {/* Outstandingrestaurant Component */}
          <div className="w-full">
            <OutstandingSection data={restaurants} type={'Nhà hàng nổi bật'} />
          </div>

          {/* Outstandingresidence Component */}
          <div className="w-full">
            <OutstandingSection data={residences} type={'Nơi ở nổi bật'} />
          </div>
        </div>

        {/* Outstandingblog Component */}
        <div className="w-full">
          <OutstandingBlog />
        </div>
      </main>
    </>
  );
};

export default HomePage;
