import React from 'react'
import Library from './Library';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../mapStyles';

const Marker = ({children}) => children

const options = {
  styles: mapStyles, 
  disableDefaultUI: true,
  zoomControl: true
}

const Libraries = ({libs, updateLibState}) => {
  return (
    <> 
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={{lat: 45.523064, lng: -122.676483}}
        defaultZoom={10}
        options={options}
      >
        {libs.map((lib) => {
            return(
             
              <Marker
                key={lib.id}
                lat={lib.latitude}
                lng={lib.longitude}
              >
                <Library  
                lib={lib} 
                updateLibState={updateLibState}
                />
              </Marker>
              
            );
          }
        )}
      </GoogleMapReact>
    </>
  );
};

export default Libraries