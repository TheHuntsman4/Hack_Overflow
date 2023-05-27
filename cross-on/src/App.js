import AllBusiness from './pages/AllBusiness.js';
import './App.css';
import BusinessPage from './components/BusinessPage.js';
import Register from './pages/Register.js';
// import Community from './pages/Community.js';
import Landing from './pages/Landing.jsx';
import Profiles from './pages/Profiles.jsx';
import Login from './pages/login.jsx';
import Business from './pages/AllBusiness.js';
import AllCommunity from './pages/AllCommunity.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>    
    <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/profiles' element={<Profiles />} />
    <Route path="/business" element={<Business />} />
    <Route path="/communities" element={<AllCommunity />} />
    <Route path="/login" element={<Login />} />
    
    <Route path='/register' element={<Register />} />
  </Routes>
  </>

  );
}

export default App;
