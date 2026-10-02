import React from "react";
import Matematicas from "./Matematicas";
function PadreMatematicas() {

    const doble = (num1) => {
        console.log(num1*2);
   
    };
    const triple = (num1) => {
        console.log(num1*3);
    }

    return(<div><h1>Saludo desde el padre</h1>
    <Matematicas doble={doble} triple={triple}/>
 
    
       
    </div>)
}

export default PadreMatematicas;