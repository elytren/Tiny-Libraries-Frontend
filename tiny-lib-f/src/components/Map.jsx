import React, { useState } from 'react';
import useSwr from 'swr';
import GoogleMapReact from 'google-map-react';
import '@reach/combobox/styles.css'
import mapStyles from '../mapStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddLibrary from './forms/AddLibrary';
import Libraries from './Libraries';
import Library from './Library';

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({children}) => children

const options = {
    styles: mapStyles, 
    disableDefaultUI: true,
    zoomControl: true
}

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };
  
// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Modal heading
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Centered Modal</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }

// const MyVerticallyCenteredModal = (props)=> {
//     return (
//               <Modal
//                 {...props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//               >
//                 <Modal.Header closeButton>
//                   <Modal.Title id="contained-modal-title-vcenter">
//                     Modal heading
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   <h4>Centered Modal</h4>
//                   <p>
//                     Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//                     dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//                     consectetur ac, vestibulum at eros.
//                   </p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button onClick={props.onHide}>Close</Button>
//                 </Modal.Footer>
//               </Modal>
//             );
// }

const Map = ({updateLibState, libs, addLib}) => {
    // const navigate = useNavigate();
    // const url = 'http://localhost:8000/libraries/'
    // const {data, error} = useSwr(url, fetcher);
    // const mapLib = data && !error ? data : [];
    

    // function MyVerticallyCenteredModal(props) {
    //     return (
    //       <Modal
    //         {...props}
    //         size="lg"
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //       >
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             Modal heading
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //           <h4>Centered Modal</h4>
    //           <p>
    //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //             consectetur ac, vestibulum at eros.
    //           </p>
    //         </Modal.Body>
    //         <Modal.Footer>
    //           <Button onClick={props.onHide}>Close</Button>
    //         </Modal.Footer>
    //       </Modal>
    //     );
    //   }

    // const deleteLib = (id) => {
    //     axios.delete(`http://localhost:8000/libraries/${id}`)
    //     .then((res)=>{
    //         console.log(res);
    //         updateLibState(id);
    //         navigate("/", {replace: true})
    //     })
    // }

    // let subtitle;
    // const [modalIsOpen, setIsOpen] = useState(false)

    // function openModal(){
    //     setIsOpen(true);
    // }

    // function afterOpenModal(){
    //     subtitle.style.color = '#f00'
    // }

    // function closeModal(){
    //     setIsOpen(false);
    // }

    // const [modalShow, setModalShow] = useState(false);





  return (
    <div style={{ height: '50vh', width: '50vw'}}>
        {/* <GoogleMapReact 
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultCenter={{lat: 45.523064, lng: -122.676483}}
            defaultZoom={10}
            options={options}
        > */}
            
            <Libraries updateLibState={updateLibState} libs={libs}></Libraries>
            
           
            
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}

             {/* <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles} 
                contentLabel='Example Modal'
            >
                    <h2 ref={(_subtitle)=> (subtitle = _subtitle)}>You've clicked on </h2>
                    <button onClick={closeModal}>Close</button> 
                {/* <button onClick={()=> deleteLib(lib.id)}>Delete</button>
            </Modal> */} 

        {/* </GoogleMapReact> */}
        <AddLibrary addLib={addLib}></AddLibrary>
    </div>
  )
}

export default Map

