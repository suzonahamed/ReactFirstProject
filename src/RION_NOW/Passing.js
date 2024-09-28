import React from 'react'

export default function Passing(props) {
  return (
    <div>
     {props.data.map((nam,index)=>(
        <p key={index}>{nam}</p>
     ))}
    </div>
  )
}
