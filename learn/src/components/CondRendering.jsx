import React, { useState } from 'react'
import Filter from "./Filter"
import Map from "./Map"


function CondRendering() {

  const [data,setData] = useState(true);

  return (<>
  {data ? <Map/> : <Filter/> }
  <button onClick={()=>setData(!data)}>CLick here </button>
  </>
    
  )
}

export default CondRendering