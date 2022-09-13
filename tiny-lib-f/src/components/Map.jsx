import React, { useState, useRef, useCallback } from 'react';
import useSwr from 'swr';
import GoogleMapReact from 'google-map-react';
import '@reach/combobox/styles.css'
import mapStyles from '../mapStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({children}) => children

const options = {
    styles: mapStyles, 
    disableDefaultUI: true,
    zoomControl: true
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const Map = ({updateLibState}) => {
    const navigate = useNavigate();
    const url = 'http://localhost:8000/libraries/'
    const {data, error} = useSwr(url, fetcher);
    const libs = data && !error ? data : [];

    const deleteLib = (id) => {
        axios.delete(`http://localhost:8000/libraries/${id}`)
            .then((res)=>{
                console.log(res);
                updateLibState(id);
                navigate("/", {replace: true})
            })
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal(){
        setIsOpen(true);
    }

    function afterOpenModal(){
        subtitle.style.color = '#f00'
    }

    function closeModal(){
        setIsOpen(false);
    }


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
                    <button onClick={openModal} className='lib-marker'>
                        <img src='/mark.png' alt='lib marker'/>
                    </button>
                        <Modal
                            ariaHideApp={false}
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles} 
                            contentLabel='Example Modal'
                        >
                            <h2 ref={(_subtitle)=> (subtitle = _subtitle)}>You've clicked on {lib.address}</h2>
                            <button onClick={closeModal}>Close</button>
                            <button onClick={()=> deleteLib(lib.id)}>Delete</button>
                        </Modal>
                </Marker>
            ))}

        </GoogleMapReact>
    </div>
  )
}

export default Map