import React from 'react'
import { 
  createBrowserRouter, 
  RouterProvider, 
  Link, 
  Outlet, 
  useParams 
} from 'react-router-dom';
import Debouncing from "./components/Debouncing"
import Map from "./components/Map"
import Props from "./components/Props"
import CreateContext from "./components/CreatContext"
import Filter from "./components/Filter"
import API from "./components/API"
import Usestate from "./components/Usestate"
import CondRendering from "./components/CondRendering"

const newData = "Hello";

function App() {
  return (
  <>
    {/* <Debouncing/>
    <Map/>
    <Props data = {newData}/>
    <Props name = "mohit"/>
    <Props age = "22" /> */}
    {/* <CreateContext/> */}
    {/* <Filter/> */}
    {/* <API/> */}
    {/* <Usestate/> */}
    {/* <CondRendering/> */}

  </>
  )
}

export default App