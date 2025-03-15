import './App.css';
import Header  from './Components/header';
import Main  from './Components/main';
import Footer from './Components/footer';
import CreatePost from './pages/CreatePost';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/post" element={<PostPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;