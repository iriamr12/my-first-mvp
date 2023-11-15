import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
export default function Education(){

    const [training, setTraining] = useState([]);
    
    useEffect (() => {
        getTraining()
    }, [])

    const getTraining = async () => {
        try{
            const response = await fetch(`/api`, {
                method: 'GET',
            }) ;
            const data = await response.json();
            setTraining(data);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className='grid'>
            <h1>Education</h1>
                <p>Here you can acces to all the data related to your academic training</p>
                <div className="container">
                    <div className ="row">
                        <div className ="col">
                        {
                            training.map(c => (
                                                <div key ={c.id}>
                                                    <Link to={`/citizens/${c.id}`}>University degree: {c.university_degrees}</Link>
                                                </div>
                                                ))
                        }
                        </div>
                        <div className ="col">
                        {
                            training.map(c => (
                                                <div key ={c.id}>
                                                    <Link to={`/citizens/${c.id}`}>Master's degree: {c.masters_degrees} </Link>
                                                </div>
                                                ))
                        }
                        </div>
                        <div className ="col">
                        </div>
                        <div className ="col">
                        {
                            training.map(c => (
                                                <div key ={c.id}>
                                                    <Link to={`/citizens/${c.id}`}>Other titles: {c.other_titles}</Link>
                                                </div>
                                                ))
                        }
                        </div>
                       
                    </div>
                </div>
                
        </div>
    )
}