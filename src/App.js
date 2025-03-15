import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainPage from './Pages/MainPage.js'; 
import PostPage from './Pages/PostPage.js';
import Home from './Pages/Home.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/post" element={<PostPage />} /> 
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;