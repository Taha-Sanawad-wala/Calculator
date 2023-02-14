import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react'
// import ReactDOM from 'react-dom'
import Calculator from './pages/calculator';
import History from './pages/history'
function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Calculator/>} />
    <Route path="/history" element={<History/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
