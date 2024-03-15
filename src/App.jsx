import { Route, Routes, useNavigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { Explore, HomePage, TripPlan, UserProfile } from './pages';
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
            {!user.isGoogleAuth && (
              <Route path="change-password" element={<ChangePassword />} />
            )}
          </Route>
        )}
        <Route path={`blog/:blogId`} element={<BlogDetail />} />
        <Route path="blog-individual" element={<BlogIndividualList />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog-update/:blogId" element={<UpdateBlog />} />
        <Route path="blog-create" element={<CreateBlog />} />
        <Route path="trip-plan" element={<TripPlan />} />
        <Route path="explore" element={<Explore />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;
