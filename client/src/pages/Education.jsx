import React from 'react'
import {useState} from 'react';
import {Link} from "react-router-dom"

export default function Education(){

    const EMPTY_FORM = {
        institution: "",
        degree: "",
        startDate: "",
        endDate: ""
      };
    

    const [training, setTraining] = useState(EMPTY_FORM);
    
    // const getEducation = ()=>{

    // }

    return(
        <div>
            <h1>Education</h1>
        </div>
    )
}