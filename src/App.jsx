import { Route, Routes, useNavigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { Explore, HomePage, TripPlan, UserProfile } from './pages';
import NotFound404 from './components/NotFound404';
import { useContext, useEffect } from 'react';
import { fetchUserFromLocalStorage } from './utils/fetchUserFromLocalStorage';
import { UserContext } from './Contexts/UserContext';
import ProfileLayout from './layouts/ProfileLayout';
import ChangePassword from './pages/ChangePassword';

function App() {
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();

    if (userLS) {
      setUser(userLS);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />} errorElement={<NotFound404 />}>
        {/* trang mới thêm vào đây */}
        <Route index element={<HomePage />} />
        {user && (
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="information" element={<UserProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        )}
        <Route path="trip-plan" element={<TripPlan />} />
        <Route path="explore" element={<Explore />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;
