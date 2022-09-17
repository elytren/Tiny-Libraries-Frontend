import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'



const Library = ({lib, updateLibState}) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(null);
  const deleteLib = (id) => {
    axios.delete(`https://fta.herokuapp.com/libraries/${id}`)
    .then((res)=>{
        console.log(res);
        updateLibState(id);
        navigate("/adventure", {replace: true})
    })
  }
  
  const address = `https://maps.google.com/?daddr=${lib.latitude},${lib.longitude}`

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {lib.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a 
            href={address}
          
          >{lib.address}</a>
          <p>
            {lib.latitude}, {lib.longitude}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=> deleteLib(lib.id)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <button onClick={()=> setModalShow(true)} className='lib-marker'>
        <img src='/home.png' alt='lib marker'/>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Library;