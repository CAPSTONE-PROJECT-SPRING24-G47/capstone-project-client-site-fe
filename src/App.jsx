import { Route, Routes, useNavigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import {
  Explore,
  HomePage,
  TripPlan,
  UserProfile,
  TripBuilder,
  TripBuilderManual,
  TripDetail,
} from './pages';
import NotFound404 from './components/NotFound404';
import { useContext, useEffect } from 'react';
import { fetchUserFromLocalStorage } from './utils/fetchUserFromLocalStorage';
import { UserContext } from './Contexts/UserContext';
import ProfileLayout from './layouts/ProfileLayout';
import RestaurantDetail from './pages/DataDetailPage/LocationDetail';
import LocationReview from './pages/LocationReview';
import LocationDetail from './pages/DataDetailPage/LocationDetail';
import UpdateReview from './pages/UpdateReview';

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
          <>
            <Route path="profile" element={<ProfileLayout />}>
              <Route path="information" element={<UserProfile />} />
              <Route path="change-password" element={<UserProfile />} />
            </Route>
            <Route path="/restaurantReview/:id" element={<LocationReview />} />
            <Route
              path="/accommodationReview/:id"
              element={<LocationReview />}
            />
            <Route
              path="/touristAttractionReview/:id"
              element={<LocationReview />}
            />
            <Route
              path="/updateRestaurantReview/:id/:commentId"
              element={<UpdateReview />}
            />
            <Route
              path="/updateAccommodationReview/:id/:commentId"
              element={<UpdateReview />}
            />
            <Route
              path="/updateTouristAttractionReview/:id/:commentId"
              element={<UpdateReview />}
            />
          </>
        )}
        <Route path="RestaurantDetail/:id" element={<LocationDetail />}></Route>
        <Route
          path="AccommodationDetail/:id"
          element={<LocationDetail />}
        ></Route>
        <Route
          path="TouristAttractionDetail/:id"
          element={<LocationDetail />}
        ></Route>
        <Route path="trip-plan" element={<TripPlan />} />
        <Route path="explore" element={<Explore />} />
        <Route path="trip/:id" element={<TripDetail />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
      <Route path="/trip-builder" element={<TripBuilder />} />
      <Route path="/trip-builder-manual" element={<TripBuilderManual />} />
    </Routes>
  );
}

export default App;
