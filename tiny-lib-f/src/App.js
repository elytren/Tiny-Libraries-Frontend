import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  const [libs, setLibs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/libraries/')
      .then(res => res.json())
      .then(libs => setLibs(libs));
  }, [])

  const addLib = (lib) => {
    setLibs([...libs, lib]);
  };

  const updateLibState = (id) => {
    setLibs(libs.filter((lib)=> lib.id !== id));
  }
  return (
    <Routes>
      <Route path='/' element={<Home libs={libs} updateLibState={updateLibState} addLib={addLib}/>}/>
    </Routes>
  );
}

export default App;
