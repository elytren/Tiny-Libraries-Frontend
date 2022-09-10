import Libraries from "../components/Libraries";
import Map from '../components/Map';
import MapTwo from '../components/MapTwo';
import React from 'react'

const Home = ({libs}) => {
  return (
    <>
    <Libraries libs={libs}/>
    <MapTwo />
    </>
  )
}

export default Home
