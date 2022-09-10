import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from 'date-fns'
import mapStyles from '../mapStyles';
import React, {useState, useCallback, useRef} from 'react'
import useSwr from 'swr';

import usePlacesAutocomplete , {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css'

const url = 'http://localhost:8000/libraries/'



const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}

const center = {
  lat: 45.523064, 
  lng: -122.676483,
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Map = () => {
    
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const {data, error} = useSwr(url, fetcher);

    const libs = data && !error ? data : [];

    const onMapClick = useCallback((event)=>{
      setMarkers(current => [...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
      } ])
    }, [])

    const {isLoaded, loadError } = useLoadScript({ 
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries
    });
//holds things in state so react doesnt rerender 
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
      mapRef.current = map;
    }, []);


    const panTo = useCallback(({lat, lng})=> {
      mapRef.current.panTo({lat, lng});
      mapRef.current.setZoom(14)
    }, [])

    if (loadError) return "Error loading maps";
    if (!isLoaded) return 'Loading Maps';

    const Marker = ({children}) => children;

  return (
    <div>
        {/* <Libraries libraries={libraries} /> */}
        <Search  panTo={panTo}  />
        <Locate panTo={panTo} />
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={8} 
          center={center} 
          options={options} 
          // onClick={onMapClick}
          onLoad={onMapLoad}
        > 
        {markers.map(marker => 
        <Marker 
          key={marker.time.toISOString()} 
          position={{ lat: marker.lat, lng:marker.lng}}
          icon={{
            url:'/home.png', 
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0,0),
            anchor: new window.google.maps.Point(15,15),
          }}
          onClick={()=>{
            setSelected(marker);
          }}
        />)}
          {selected ? (<InfoWindow position={{ lat:selected.lat, lng: selected.lng}} onCloseClick={()=> {
            setSelected(null);
          }}>
            <div>
              <h2>Library Spotted</h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>) : null}
        </GoogleMap>
    </div>
  )
}



function Locate({panTo}){
    return <button className="locate" onClick={()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }, ()=> null , options);
    }}><img src='/compass.png' alt='locate me'/></button>
  }
  
  
function Search({panTo}){
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions:{
        location: { lat: () => 45.523064, 
            lng: () => -122.676483, },
        radius: 200 * 1000,
        }
    });
    return <div className="search">
    <Combobox onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions()
        try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });
        }
        catch (error){
            console.log('error!')
        }
    }}>
        <ComboboxInput value={value} onChange={(e)=>{
        setValue(e.target.value);
        
        }}
        disabled={!ready}
        placeholder= 'Enter an address'
        />
        <ComboboxPopover>
            <ComboboxList>
            {status === "OK" && data.map(({id, description})=> <ComboboxOption key={id} value={description}/>)}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox></div>
}

export default Map