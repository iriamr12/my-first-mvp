import React from 'react'

export default function Citizenship({citizen}){

    return(
        <div>
            
            <h1>Citizenship</h1>

            <ul>
                citizen.firstname
                citizen.lastname
                citizen.id_number
                citizen.date_of_birth
                citizen.place_of_birth
            </ul>
            
        </div>
    )
}

