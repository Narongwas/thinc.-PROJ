import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './Pages/MainPage.js'; 
import PostPage from './Pages/PostPage.js';
import Home from './Pages/Home.js';
import Shop from './Pages/Shop.js';
import Profile from './Pages/Profile.js';
import Comment from './Pages/Comment.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/post" element={<PostPage />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Comment" element={<Comment />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;