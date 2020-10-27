import React from 'react';
import './Body.css';
import { Alert, Button } from 'react-bootstrap';

function Body(props){

        
    const mensaje=()=>{
        return alert("Hola mundo.\n Pd. no pude centrar el header:(")
      }


    return(
        <div className="Body">
            
            <h2>{props.texto1}</h2>
            {
                props.temas.map((e,index)=>
                <p key={index}>{e}</p>
                )
            }

        <Button onClick={()=>mensaje()}>Click aqui</Button>

        </div>
    )
}

export default Body;