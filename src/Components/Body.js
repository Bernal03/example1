import React from 'react';
import './Body.css';
import { Button } from 'react-bootstrap';

function Body(props){
    
    const mifuncion1=()=>{
        console.log("Hola desde funcion #1")
        }

    return(
        <div className="Body">
            <h2>{props.texto1}</h2>
            {
                props.temas.map((e,index)=>
                <p key={index}>{e}</p>
                )
            }

<Button variant="primary" onClick={()=>this.mifuncion1()}>Boton #1</Button>

        </div>
    )
}

export default Body;