import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Fantacy from './Pages/Fantacy/Fantacy';
import FantacyHeader from './Pages/Fantacy/FantacyHeader';
;

function App() {
  return (
    <div className="App">

        {/* <Navbar/> */}
        <FantacyHeader />
        <Fantacy />
        
    </div>
  );
}

export default App;
