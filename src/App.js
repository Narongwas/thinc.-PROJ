import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './Pages/MainPage.js'; 
import PostPage from './Pages/PostPage.js';
import Home from './Pages/Home.js';
import MainPageIfSign from './Pages/MainPageIfSign.js';
import PopcatPage from './Pages/PopCatPage.js'; // Import the new PopcatPage component
import ProfilePage from './Pages/Profile.js';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;