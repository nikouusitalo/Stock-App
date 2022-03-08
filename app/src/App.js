
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element ={<LandingPage/>} />

      </Routes>
    </div>
  );
}

export default App;
