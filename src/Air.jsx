import React from 'react';
import { useState } from 'react';
import axios from "axios";
import "./Air.css";


const Air = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
          setLocation('')
        }
      }

  return (
    <div>
<div className='sunseti'>

<div className="searchapi">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
          className='inpapi'
           />
      </div>
          <div className="locationapi">
            <p className='windapi'>{data.name}</p>
          </div>  
            {data.main ? <h1 className='howff'>{data.main.temp.toFixed()}°F</h1> : null}    
            {data.name !== undefined &&
            <div className='flexair'> 
               <div className="feelrs">
              {data.weather ? <div className="tempapi"><p className='windappi'>{data.weather[0].main}</p>  
              {data.main ? <div className='twempapi'><p className='win2dappi'>{data.main.feels_like.toFixed()}°F</p>  
              </div>
              : null}
                 </div> 
              : null}          
              <div className='feels'>
              <p className='feeelss'>Feels Like</p>
              </div>
           </div>
        <div className='flexassir'>
            <div className="humidity">
              {data.main ? <p className='spec'>{data.main.humidity}%</p> : null}
              <p className='windapi7'>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='spec'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p className='windapi7'>Wind Speed</p>
                    </div> 
                </div>  
           </div> 
        }
      </div>  

    





    </div>
  )
}

export default Air