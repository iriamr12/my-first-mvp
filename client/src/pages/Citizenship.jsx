import React from 'react'
import {useState} from 'react';
import {Link} from "react-router-dom"

export default function Citizenship(){

    const [citizens, setCitizens] = useState([]);
    
    const getCitizens = async () => {
        try{
            const response = await fetch(`/api/citizens`, {
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
                            <Link to={`/citizens/${c.id}`}>{s.firstname} {s.lastname}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}