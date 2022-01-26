
import './App.css';
import Navigation from './Component/Home/Navigation/Navigation';
import Carosule from './Component/Home/Carosule/Carosule';
import SecondNav from './Component/Home/Navigation/SecondNav';
import Cards from './Component/Home/CardCopmonent/Cards';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Signup from './Component/Home/Signup';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home/>} />
      <Route path="signIn" element={<Signup/>} />
      
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
