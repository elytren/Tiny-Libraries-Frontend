import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './components/Map';
import Layout from './components/layout/Layout';
import './App.css';

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
    <Layout>
    <Routes>
      <Route path='/' element={<Home libs={libs} updateLibState={updateLibState} addLib={addLib}/>}/>
      <Route path='/adventure' element={<Map updateLibState={updateLibState} libs={libs} addLib={addLib}/>}/>
    </Routes>
    </Layout>
  );
}

export default App;
