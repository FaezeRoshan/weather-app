//App.js

import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';


	const App = () => {
	 
  const [data , setdata] = useState({})
  const [location , setlocation] = useState('')
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bcfb626f577f2fae67c3d607b261b8e7`
				
const search =(e) =>
{   
    if(e.key === 'Enter')
      {
        axios.get(url).then( res => {setdata(res.data)
        console.log(res.data)
        })
        setlocation('')
      }
   
}
	return (
    <>
     <div className="search">
        <input 
        placeholder='Eenter location'  
        value={location}
        onChange={e => {setlocation(e.target.value)}} 
        onKeyPress={search}
        type='text' />
      </div>
		<div className="App">
		<div className="container"> 
    <div className="top">
      <div className="location">
      <p>{data.name}</p>
      </div>
      <div className="temp">
       {data.main ? <h1>{data.main.temp }°F</h1> : null}
      </div>
      <div className="description">
      {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
    </div>
    {data.name != undefined &&
      <div className="bottom">
      <div className="feels">
      {data.main ? <p className='bold'>{data.main.feels_like} °F</p> : null}
       <p>feels like</p>
      </div>
      <div className="humidity">
      {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        <p>humidity</p>
      </div>
      <div className="wind">
      {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
        <p>wind speed</p>
      </div>
    </div>
     }
  
    </div>
		
		</div>
    </>
	);
}

export default App;
