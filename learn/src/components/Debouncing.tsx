import axios from "axios";
import {useEffect, useState} from "react"

export default function App(){

    const api_key=""
    const api=""

    const [data, setData] = useState(null);
    const [city, setCity] = useState("");
    const[debo, setDebo]= useState("");



    useEffect(
        ()=>{
        const change= setTimeout(()=>{
            setDebo(city);

        },500);
        return ()=>{
            clearTimeout(change);
        }

    },[city]);


    useEffect(
        ()=>{
            fetchData();
    },[debo])

    const fetchData = async() =>{

        const res = await axios.get(api , {
            params:{
                q:city,
                appid: api_key,
                units: "metric"
            }
        });

        setData(res.data);
        console.log(data);
    }


    return <>
        <div>
            <input type="text" value={city} onChange={e=>setCity(e.target.value)}/>
            <button onClick={fetchData}>click to get weather</button>
        </div>
        <div>
            <li>city : {data?.name}</li>
            <li>temperature :{data?.main?.temp} </li>
            <li>Wind Speed : {data?.wind?.speed}</li>
            <li>Weather : {data?.weather?.[0]?.description}</li>
            <li>Longitude : {data?.coord?.lon}</li>
            <li>Latitude : {data?.coord?.lat}</li>
        </div>
    </>
}