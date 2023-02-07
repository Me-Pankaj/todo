import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Header />
          <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
