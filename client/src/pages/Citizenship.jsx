import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
export default function Citizenship(){

    const [citizens, setCitizens] = useState([]);

    useEffect(() => {
        getCitizens()
       }, [])
    
    const getCitizens = async () => {
        try{
            const response = await fetch(`/api`, {
                method: 'GET', 
            }) ;
            const data = await response.json();
            setCitizens(data);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div>
            <h1>Citizenship</h1>
            <ul>
                {
                    citizens.map(c => (
                        <li key ={c.id}>
                            <Link to={`/citizens/${c.id}`}>{c.id_number} {c.firstname} {c.lastname} {c.date_of_birth} {c.place_of_birth}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}