import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './DataList.css'


export default function DataList({citizen}) {
  const [featured, setFeatured] = useState([]);

  function handleClickOnCit() {
    setFeatured([
      <div className='container text-center'>
            <p><div className='bold'>Name: </div>{citizen.firstname} </p>
            <p><div className='bold'>Last Name: </div>{citizen.lastname}</p>  
            <p><div className='bold'>ID Number: </div>{citizen.id_number}</p>
            <p><div className='bold'>Date of birth: </div>{citizen.date_of_birth}</p>
            <p><div className='bold'>Place of birth: </div>{citizen.place_of_birth}</p>
            <p><div className='bold'>Nationality: </div>{citizen.nationality} </p>
            <p><div className='bold'>ID Status: </div>{citizen.id_status}</p>  
            <p><div className='bold'>ID expiration date: </div>{citizen.id_expiration_date}</p>
            <p><div className='bold'>DNIe status: </div>{citizen.DNIe_status}</p>
            <p><div className='bold'>DNIe expiration date: </div>{citizen.DNIe_expiration_date}</p>
            <p><div className='bold'>Electronic Certificate status: </div>{citizen.E_ceriticate_status}</p>  
            <p><div className='bold'>Electronic Certificate expiration date: </div>{citizen.E_ceriticate_expiration_date}</p>
            <p><div className='bold'>Cl@ve status: </div>{citizen.clave_status}</p>
            <p><div className='bold'>Cl@ve expiration date: </div>{citizen.clave_expiration_date}</p>

        <img className='citizenship-img' src=''/>
      </div>  

    ]) 
  };

  function handleClickOnEdu() {
    setFeatured([
    <div className="education-details">
      <p><div className='bold'>University Degree: </div>{citizen.university_degrees}</p> 
      <p><div className='bold'>University Master: </div>{citizen.masters_degrees}</p>
      <p><div className='bold'>Non University Degrees: </div>{citizen.non_university_degrees}</p>
      <p><div className='bold'>Other Titles: </div>{citizen.other_titles}</p>
    </div>
    ]) 
  };

  function handleClickOnHea() {
    setFeatured([
    <div className="education-details">
      <p><div className='bold'>Personal identification number: </div>{citizen.pic}</p> 
      <p><div className='bold'>Primary care doctor: </div>{citizen.primary_care_doctor}</p>
      <p><div className='bold'>Primary care center: </div>{citizen.primary_care_centre}</p>
      <p><div className='bold'>Blood type: </div>{citizen.blood_TYPE}</p>
      <p><div className='bold'>Vaccination record: </div>{citizen.vaccination_record}</p>
      <p><div className='bold'>Current diseases: </div>{citizen.current_diseases}</p>
      <p><div className='bold'>Past diseases: </div>{citizen.past_diseases}</p>
    </div>
    ]) 
  };

  function handleClickOnVeh() {
    setFeatured([
    <div className="education-details">
      <p><div className='bold'>Licence_type: </div>{citizen.licence_type}</p> 
      <p><div className='bold'>Licence expedition date: </div>{citizen.licence_expedition_date}</p>
      <p><div className='bold'>Licence expiration date: </div>{citizen.licence_expiration_date }</p>
      <p><div className='bold'>Licence_points_balance: </div>{citizen.licence_points_balance}</p>
    </div>
    ]) 
  };


    return (
        <div className='DataList'>

          <h1>Here you will find your personal data <div className='nombre'>{citizen.firstname}</div></h1>                  
               

          <container>
            <button className='btn' onClick={handleClickOnCit}>Citizenship</button>
            <button className='btn' onClick={handleClickOnEdu}>Education</button>
            <button className='btn' onClick={handleClickOnHea}>Health</button>
            <button className='btn' onClick={handleClickOnVeh}>Vehicles</button>
          </container>
            
            <div className="partOfCitizen">
          <div>
            {featured.map((partOfCitizen, index) => (
              <div>{partOfCitizen}</div>
            ))}
          </div>
        </div>

    </div>
    )
}