

function Matematicas(props) {
    let ejecutarDoble = props.doble;
    let ejecutarTriple = props.triple;
     return (<div>
         <h1>Matemáticas</h1>
         <button onClick={ () =>ejecutarDoble(4)} >Doble numero </button>
         <button onClick={() => ejecutarTriple(4)}>Triple numero </button>
     
     </div>)

}

export default Matematicas;
