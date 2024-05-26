import React from 'react';
import Card from './Card'
import Data from './Data.json';


function App(){ 
    console.log(Data);
    return(
        <div>

            { Data.map((y,index )=> <Card key={index} name={y.title} address={y.body}/>)}

        </div>
    )
}
export default App;