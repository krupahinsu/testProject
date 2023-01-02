import React, { useState } from 'react'

export default function Home() {

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  let d = JSON.parse(localStorage.getItem("details"))

  const handleClick = () => {
      let data = localStorage.getItem("details")
      let prevdData = data && JSON.parse(data)
      let details={
        "name":name,
        "email":email
       }
      let val;
      if(prevdData === null){
         localStorage.setItem("details",JSON.stringify({details:[details]}))
      }

      if(prevdData !== null){
        val = [...prevdData.details,details]
        localStorage.setItem("details",JSON.stringify({details:val}))
      }
    
   }
  return (
    <div>
  
      <form className="person form">
            <div className="field">
                <label>Name:</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}  placeholder="Name" />
            </div>
            <div className="field">
                <label>Email:</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            
            <button onClick={() => handleClick()}>Add</button>
            {
              d && d.details && d.details.length > 0 &&
              d.details.map((e) => {
                return <div> Name:{e.name} And Email: {e.email}</div>
              })
            }
        </form>
    </div>
  )
}