import Libraries from "../components/Libraries";
import Map from '../components/Map'

import React from 'react'

const Home = ({libs}) => {
  return (
    <>
    <Libraries libs={libs}/>
    <Map />
    </>
  )
}

export default Home
