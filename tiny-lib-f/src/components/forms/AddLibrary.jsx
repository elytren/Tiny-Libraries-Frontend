import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap'



const AddLibrary = ({ addLib }) => {


  const [isShown, setIsShown] = useState(false);
  const [buttonHid, setButtonHid] = useState(true);

  const initialState = {
      title: '',
      genre: '',
      address: '',
      latitude: '',
      longitude: ''
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
      setFormData({...formData, [e.target.id]: e.target.value});
  };
 const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/libraries/', formData)
        .then((res)=>{
          setFormData(initialState);
          addLib(res.data);
          navigate("/adventure");
          
        })
  };

  const showFormHideBut = (e) => {
    setIsShown(true);
    setButtonHid(false);
  } 

  const closeForm = (e) => {
    setIsShown(false);
    setButtonHid(true);
  }

  return (
    <>
      
      {isShown && (
        <form id='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title"></label>
            <input id="title" name="title" type="text" placeholder='Title' onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="genre"></label>
            <input
              id="genre"
              name="genre"
              type="text"
              placeholder='Genre'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="address"></label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder='Address'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="latitude"></label>
            <input id="latitude" name="latitude" type="text" placeholder='Latitude' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="longitude"></label>
            <input id="longitude" name="longitude" type="text" placeholder='Longitude' onChange={handleChange} />
          </div>
          <div>
            <Button className='m-3' variant='outline-secondary' id="new" type="submit"> Add </Button>
            <Button className='m-3' variant='outline-secondary' id='canceladd' onClick={closeForm}>Cancel</Button>
          </div>
          
        </form>)
      }
      {buttonHid && (<a href='/adventure#form'><Button onClick={showFormHideBut} variant='outline-secondary' id='addlibbut'>Add Library</Button></a>)}
    </>
  )
}

export default AddLibrary