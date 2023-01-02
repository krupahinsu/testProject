import React, {useEffect,useState} from 'react'


export default function Clock() {

const[sec, setSec] = useState(0);
const[min, setMin] = useState(0);
const[hour, setHour] = useState(0);
const [flag, setFlag] = useState(false)


const closeTimer = (e) => {
  e.preventDefault()
  setFlag(true)
  setSec(0)
  setHour(0)
  setMin(0)
}

const timer = (e) => {
  if(!flag){
    setTimeout(() => {
      if(sec<60  ){
         setSec(() => sec+1);
         
      }
      if(sec > 59){
        setSec(() => 0)
        setMin(() => min+1)
      
      }
      if(min > 59 ){
        setSec(() => 0)
        setMin(() => 0)
        setHour(() => hour+1)
        
      }
      }, 10);
   }else{
    setSec(0)
    setMin(0)
    setHour(0)
   }
}

useEffect(() =>{
 timer()
})

  return (
    <div>
      <h1>{hour}:{min}:{sec}</h1>
      <button onClick={() => setFlag(false)}>Start</button>
      <button onClick={(e)=>closeTimer(e)}>Stop</button>
    </div>
  )
}
