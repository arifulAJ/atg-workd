import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Home/Navigation/Navigation';
import Carosule from './Component/Home/Carosule/Carosule';
import SecondNav from './Component/Home/Navigation/SecondNav';
import Cards from './Component/Home/CardCopmonent/Cards';

function App() {
  return (
   <div>
    <Navigation/>
    <Carosule/>
    <SecondNav/>
    <Cards/>
   </div>
  );
}

export default App;
