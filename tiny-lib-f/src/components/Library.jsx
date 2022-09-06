import React from 'react'

const Library = ({library}) => {
  return (
    <>
        <h1>{library.id}</h1>
        <h2>{library.title}</h2>
        <h3>{library.genre}</h3>
        <h3>{library.lat}</h3>
        <h3>{library.lng}</h3>
    </>
  )
}

export default Library;