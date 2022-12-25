import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import Landing from "./Pages/Landing.jsx"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
