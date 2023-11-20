import React from "react"


export default function Education({citizen}){

    return(
        <div>
          
          <h2>Education</h2>

          <ul>
            citizen.university_degrees 
            citizen.masters_degrees 
            citizen.non_university_degrees
            citizen.other_titles
          </ul>
            
        </div>
    )
}