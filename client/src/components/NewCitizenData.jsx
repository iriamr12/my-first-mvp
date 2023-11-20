import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCitizenData.css';

export default function NewCitizenData(props) {

    const [id, setId] = useState('');
    const [citizens, setCitizens] = useState('')
    const navigate = useNavigate()

    const handleChange =  (e) => {
        setId(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.showCitizen(id);
        navigate(`/citizen`)     
  
    };
        
  return (
    <div>
      <h1 className='maintitle'>My digital environment</h1>
        <p>My digital enviorment is a personal online space that facilitates <br/> your relationship with the Public Administrations.<br/><br/>Stay in touch with your digital identity in one single click.</p>
        <img src="https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?w=740&t=st=1700318347~exp=1700318947~hmac=e9450e54e1ee6d95a743fc1b3634a4602c1ef0ce6a56bf322b80289d0086343f" />
        <form className='form' onSubmit={handleSubmit}>
        {/* <label htmlFor="id">Insert ID: </label> */}
          <input     
                placeholder='Enter your ID'
                className='input'
                id='id'
                type= "number"
                name='id' 
                value={id} 
                onChange={handleChange}
                min={1}
                max={9}
                />
        <button className='button' type="submit">Submit</button>

        </form>
    </div>
  );

}


        