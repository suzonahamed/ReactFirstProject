import React,{useState} from 'react'
import Passing from './Passing'
import Child from './Child'

const data=["Hasi","Priya","Taposi"]
const Parent = () => {
    const[info,setInfo]=useState(data)

    const handle=(newInfo)=>{
        setInfo([...info,newInfo])
        
    }
  return (
    <div>
       
      <Child todos={handle}/>
      <Passing data={info}/>
    </div>
  )
}

export default Parent;