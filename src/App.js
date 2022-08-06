// import logo from './airbnb';
import './App.css';
import Hero from './Components/Hero';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/' element={<Hero/>}/>

      </Routes>

    </div>
  );
}

export default App;
