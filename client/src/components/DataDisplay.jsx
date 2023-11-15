import React from 'react';
import { useState } from 'react';

export default function DataDisplay(props) {

    const [id, setId] = useState('');
    const [data, setData] = useState('');

    function handleChange (e) {
        setId(e.target.value);
    };


    const getData = async () => {
        try{
            const response = await fetch(`/api:{id}`, {
                method: 'GET', 
            }) ;
            const data = await response.json();
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }; 


    function handleSubmit(event) {
        event.preventDefault();
        props.addIdCb(id)
        setId('')
        const fetchedData =
        setData(fetchedData)
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Insert ID
          <input 
                type='text'
                name='id' 
                value={id} 
                onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>

        </form>
    </div>
  );

}


        