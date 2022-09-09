import React from 'react'

const Library = ({lib}) => {
  return (
    <>
        <h1>{lib.id}</h1>
        <h2>{lib.title}</h2>
        <h3>{lib.genre}</h3>
        <h3>{lib.lat}</h3>
        <h3>{lib.lng}</h3>
    </>
  )
}

export default Library;