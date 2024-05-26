import React from 'react';

function Card(props){
   
       const {name,address}=props

    return(
        <div>
         <h1>Name: {name}</h1><br/>
         <h1>Address: {address}</h1>
        </div>
    )
}
export default Card;