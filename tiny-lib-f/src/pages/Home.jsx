import Libraries from "../components/Libraries";

import React from 'react'

const Home = ({libraries}) => {
  return (
    <div>
        <Libraries libraries={libraries} />
    </div>
  )
}

export default Home
