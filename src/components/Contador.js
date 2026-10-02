import  { useState } from 'react';

function Contador() {
    const[numero,setNumero] = useState(0);
    const incrementar = () => {
        setNumero(numero + 1);
    }

    return (<div>
        <h1>Contador state</h1>
        <h2 style={{color:"blue"}}>Contador: {numero}</h2>
        <button style={{color:"red"}} onClick={incrementar}>Incrementar </button>
        <button onClick={ () => incrementar()}> Incrementar </button> 

        <button onClick={ () => { setNumero(numero - 1); }}> Restar </button> 
    </div>)
}

export default Contador;