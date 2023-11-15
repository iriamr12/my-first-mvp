import React, { useState } from 'react';
import DataDisplay from '../components/DataDisplay';

export default function Home() {
  const [id, setId] = useState('');

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
  };

  return (
    <div>
      Home
      <form onSubmit={handleSubmit}>
        <label>
          Insert ID
          <input 
                type='text'
                name='id' 
                value={id} 
                onChange={handleInputChange} />
                {id && <DataDisplay id={id} />}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
