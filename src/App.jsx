import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { Explore, HomePage, TripPlan, UserProfile } from './pages';
import NotFound404 from './components/NotFound404';
import { useContext, useEffect } from 'react';
import { fetchUserFromLocalStorage } from './utils/fetchUserFromLocalStorage';
import { UserContext } from './Contexts/UserContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound404 />}>
      {/* trang mới thêm vào đây */}
      <Route index element={<HomePage />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="trip-plan" element={<TripPlan />} />
      <Route path="explore" element={<Explore />} />

    </Route>
  )
);

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();

    if (userLS) {
      console.log(userLS);
      setUser(userLS);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
