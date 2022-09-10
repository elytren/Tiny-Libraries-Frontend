import React, { useState, useRef, useCallback } from 'react';
import useSwr from 'swr';
import GoogleMapReact from 'google-map-react';
import '@reach/combobox/styles.css'
import mapStyles from '../mapStyles';


const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({children}) => children

const options = {
    styles: mapStyles, 
    disableDefaultUI: true,
    zoomControl: true
}



const MapTwo = () => {
    
    const url = 'http://localhost:8000/libraries/'
    const {data, error} = useSwr(url, fetcher);
    const libs = data && !error ? data : [];
    

  return (
    <div style={{ height: '50vh', width: '50vw'}}>
        <GoogleMapReact 
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultCenter={{lat: 45.523064, lng: -122.676483}}
            defaultZoom={10}
            options={options}
        >
            {libs.map(lib => (
                <Marker 
                    key={lib.id} 
                    lat={lib.latitude}
                    lng={lib.longitude}
                >
                    <button className='lib-marker'>
                        <img src='/home.png' alt='lib marker'/>
                    </button>
                </Marker>
            ))}

        </GoogleMapReact>
    </div>
  )
}

export default MapTwo