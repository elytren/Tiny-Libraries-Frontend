import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const AddLibrary = ({ addLib }) => {
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
          navigate("/", {replace: true})
        })
  };




  return (
    <form onSubmit={handleSubmit}>
      <h1>New Library</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="latitude">Latitude</label>
        <input id="latitude" name="latitude" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="longitude">Longitude</label>
        <input id="longitude" name="longitude" type="text" onChange={handleChange} />
      </div>
      <div><button id="new" type="submit"> Add </button></div>
    </form>
  )
}

export default AddLibrary