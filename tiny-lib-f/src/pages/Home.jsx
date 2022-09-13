import Libraries from "../components/Libraries";
import Map from '../components/Map';
import React from 'react'
import AddLibrary from "../components/forms/AddLibrary";

const Home = ({libs, addLib, updateLibState}) => {
  return (
    <>
    <Libraries libs={libs}/>
    <Map updateLibState={updateLibState}/>
    <AddLibrary libs={libs} addLib={addLib}/>
    </>
  )
}

export default Home
