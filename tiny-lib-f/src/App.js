import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/libraries')
      .then(res => res.json())
      .then(libraries => setLibraries(libraries));
  })



  return (
    <Routes>
      <Route path='/' element={<Home libraries={libraries}/>}/>
    </Routes>
  );
}

export default App;
