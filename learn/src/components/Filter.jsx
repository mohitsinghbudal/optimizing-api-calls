import React from 'react'

const user = [
    { name: "Ram", age: 15 },
    { name: "Shyam", age: 25 },
    {name:"mohit", age: 22},
    {name:"nabin",age:12}
]

function Filter() {

    const adults = user.filter(item=>item.age>=18)

  return (
    <div>
       <ul> {adults.map((item,key)=>{
            return<>
                <li key= {key}>{item.name}</li>
                <li  key= {key}>{item.age}</li>
            </>
        })}
        </ul>
    </div>
  )
}

export default Filter