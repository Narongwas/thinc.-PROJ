import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './Pages/MainPage.js'; 
import PostPage from './Pages/PostPage.js';
import Home from './Pages/Home.js';
import Comment from './Pages/Comment.js';
import MainPageIfSign from './Pages/MainPageIfSign.js';
import PopcatPage from './Pages/PopCatPage.js';
import ProfilePage from './Pages/Profile.js';
import RegisterPage from './Pages/Register.js';
import Signinpage from './Pages/login.js';
import ShopPage from './Pages/Shop.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/post" element={<PostPage />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/main" element={<MainPageIfSign />} /> 
          <Route path="/popcat" element={<PopcatPage />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Comment/:id" element={<Comment />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Signin" element={<Signinpage />} />
          <Route path="/Shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;