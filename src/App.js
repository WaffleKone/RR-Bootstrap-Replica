import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Background from './Components/Background';
import TopBar from './Components/TopBar';
import Listings from './Components/Listings';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <Listings/>
    </div>
  );
}

export default App;
