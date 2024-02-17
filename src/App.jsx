import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { Explore, HomePage, TripPlan, UserProfile } from './pages';
import NotFound404 from './components/NotFound404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound404 />}>
      {/* trang mới thêm vào đây */}
      <Route index element={<HomePage />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="trip-plan" element={<TripPlan />} />
      <Route path="explore" element={<Explore />} />
      <Route path="datamn" element={<DataManagement />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
