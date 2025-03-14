import './App.css';
import Header  from './header';
import Main  from './main';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div id="Main2">
        <h2 className="h2">
        MORE THAN 6 PEOPLE HAVE VISITED!<br></br>
        (OUR TEAM OFC)
        </h2>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
