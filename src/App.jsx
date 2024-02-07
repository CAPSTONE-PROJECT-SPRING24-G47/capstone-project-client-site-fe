import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/profile" element={<UserProfile />}></Route>
    </Routes>
  );
}

export default App;
