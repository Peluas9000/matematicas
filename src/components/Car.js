import { useState } from "react";   
function Car(props){
    //VARIABLE PARA AVERIGUAR EL ESTADO DEL COCHE (ENCENDIDO/APAGADO)
    const[estado, setEstado] = useState(false);
    const [velocidad, setVelocidad] = useState(0);
    let coche={
        marca:props.marca,
        modelo:props.modelo,
        velocidadmaxima:parseInt(props.velocidadmaxima),
        aceleracion:parseInt(props.aceleracion)
    };
//VAMOS A CREAR UN METODO QUE DIBUJARA HTML DINAMICO 
//DEPENDIENDO DEL ESTADO , DIBUJARA UN MENSAJE U OTRO MENSAJE 

    const comprobarEstado=()=>{
        if(estado){
            return (<h1 style={{color: 'green'}}>El coche esta encendido</h1>)
        }else{
            return (<h1 style={{color: 'red'}}>El coche esta apagado</h1>)
        }
    };

    const acelerar=()=>{
        if(estado==false){
            alert("El coche esta apagado, no se puede acelerar");
            
        }else{
            if(velocidad>=coche.velocidadmaxima){
                setVelocidad(coche.velocidadmaxima);
            }else{
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    };          

    return (
        <div>
            <h1>{coche.modelo} {coche.marca}</h1>
            {comprobarEstado()}
            <h2 style={{color: 'celeste'}}>Velocidad actual: {velocidad}</h2>
            <button onClick={() =>{setEstado(!estado)}}>On Off</button>
        <button onClick={() => acelerar()}>Acelerar{coche.aceleracion}</button>
        </div
        >
    );
}

export default Car;