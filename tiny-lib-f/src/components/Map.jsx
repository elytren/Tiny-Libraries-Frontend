import React from 'react';
import '@reach/combobox/styles.css'
import AddLibrary from './forms/AddLibrary';
import Libraries from './Libraries';


const Map = ({updateLibState, libs, addLib}) => {
  return (
    <div style={{ height: '50vh', width: '50vw'}}> 
        <Libraries updateLibState={updateLibState} libs={libs}></Libraries>
        <AddLibrary addLib={addLib}></AddLibrary>
    </div>
  )
}

export default Map

