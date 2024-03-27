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
import ChangePassword from './pages/ChangePassword';
import Blog from './pages/Blog';
import UpdateBlog from './components/Blog/UpdateBlog';
import CreateBlog from './components/Blog/CreateBlog';
import BlogList from './components/Blog/BlogList';
import BlogIndividualList from './components/Blog/BlogIndividualList';
import BlogDetail from './components/Blog/BlogDetail';
import RestaurantDetail from './pages/DataDetailPage/RestaurantDetail';
import LocationReview from './pages/LocationReview';
import UpdateReview from './pages/UpdateReview';
import AccommodationDetail from './pages/DataDetailPage/AccommodationDetail';
import TouristAttractionDetail from './pages/DataDetailPage/TouristAttractionDetail';
import TripSelfList from './pages/TripSelfList';

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
              <Route path="information" element={<UserProfile />} />
              {!user.isGoogleAuth && (
                <Route path="change-password" element={<ChangePassword />} />
              )}
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
            <Route path="/self-trips" element={<TripSelfList />} />
            <Route path="trip/:id" element={<TripDetail />} />
          </>
        )}

        <Route path={`blog/:blogId`} element={<BlogDetail />} />
        <Route path="blog-individual" element={<BlogIndividualList />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog-update/:blogId" element={<UpdateBlog />} />
        <Route path="blog-create" element={<CreateBlog />} />

        <Route
          path="RestaurantDetail/:id"
          element={<RestaurantDetail />}
        ></Route>
        <Route
          path="AccommodationDetail/:id"
          element={<AccommodationDetail />}
        ></Route>
        <Route
          path="TouristAttractionDetail/:id"
          element={<TouristAttractionDetail />}
        ></Route>
        <Route path="trip-plan" element={<TripPlan />} />
        <Route path="explore" element={<Explore />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
      {user && (
        <>
          <Route path="/trip-builder" element={<TripBuilder />} />
          <Route path="/trip-builder-manual" element={<TripBuilderManual />} />
        </>
      )}
    </Routes>
  );
}

export default App;
