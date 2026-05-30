import React, { useState } from 'react'

function Usestate() {
    const [value, setValue] = useState(0);

  return (
    <div>
        <button onClick={()=>{setValue(prev=>prev+1)}}>
             click to increase count {value}
        </button>
    </div>
  )
}

export default Usestate