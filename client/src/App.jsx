import { useEffect, useState } from 'react'
import './App.css'
import NewCitizenData from "./components/NewCitizenData"
import DataList from './components/DataList';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Citizenship from './components/Citizenship';
import Education from './components/Education';



export default function App () {
   
  const [data, setData] = useState([]);
  const [citizen, setCitizen] = useState([]);

  useEffect(()=> {
    getData();
  },
  []);


async function getData() {
  try{
    let response = await fetch("/api");
    if(response.ok){
      let data = await response.json();
      //set the state
      setData(data);
    }
    else{
      console.log(`Server Error: ${response.status} ${response.statusText}`);
    }

  } catch(err){//the server never contacted
      console.log(`Network Error, ${err.message}`);
  }

}

async function showCitizen(id) {
  console.log(id);
  try{
    let response = await fetch(`/api/${id}`);
     if(response.ok){
      let data = await response.json();
      setCitizen(data)
    }
    else{//Server Error
      console.log(`Server Error: ${response.status} ${response.statusText}`);
    }

  }catch(e){
    console.log("Network Error", e);
  }
}
  
  return (
          <div>

                <Routes>
                  <Route path='/' index element={<NewCitizenData showCitizen = {(id)=> showCitizen(id)}/>} />
                  <Route path='/citizen' element={<DataList citizen={citizen}/>} />
                        <Route path="/citizen/citizenship" element={<Citizenship citizen={citizen}/>}/>
                        <Route path="/citizen/education" element={<Education citizen={citizen}/>}/>
                </Routes>
            </div>
        
  )
}




