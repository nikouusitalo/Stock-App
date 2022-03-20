
import GlobalStyle from './globalStyles';
import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Routes>
      <Route path="/" element ={<LandingPage/>} />

      </Routes>
    </div>
  );
}

export default App;
