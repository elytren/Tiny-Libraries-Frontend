import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  const [libs, setLibs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/libraries')
      .then(res => res.json())
      .then(libs => setLibs(libs));
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home libs={libs}/>}/>
    </Routes>
  );
}

export default App;
