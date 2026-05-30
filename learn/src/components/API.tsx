import React, { useState } from 'react'

function API() {
    const [data, setData] = useState();
    const [city,setCity] = useState();

    const api_key = import.meta.env.VITE_api_key;
    const api = import.meta.env.VITE_api;

    const searchCity = async()=>{
        try{
            const res = await fetch(`${api}?q=${city}&appid=${api_key}&units=metric`);
            setData(await res.json());
        }catch(error){
            console.log(error);
        }
        console.log(data);
    }

  return (<>
  
    <div>
        <input placeholder="Type city here" value={city} onChange={e=>setCity(e.target.value)}/>
        <button title="Search" onClick={searchCity}  >Search</button>
    </div>

    {data && (<ul>
        <li>{data?.name}</li>
        <li>{data?.main?.temp} centigrade</li>
        <li>{data?.wind?.speed} m/s</li>
    </ul>)}

    </>
  )
}

export default API