const{Component} = require("react");
class Contador extends Component{
  //LA DECLARACION DE VARIABLES YA NO UTILIZA JS 

    //ES DECIR, const, var, let 
    numero =1;
    incementarNumero=()=>{
        //PARA ACCEDER A CUALQUIER ELEMENTO DE LA CLASE SE UTILIZA LA PALABRA THIS
        this.numero++;
        console.log(this.numero);
    }

    state={valor : parseInt(this.props.inicio)};

    incrementarValor = ()=>{
        this.setState({valor: this.state.valor + 1});
    }

 //LA SINTAXIS DE LA LLAMADA A LOS METODOS HA CAMBIADO EN RENDER 

    //PUEDO LLAMAR DIRECTAMENTE AL METODO EN ONCLICK (sin lambda) Y  

    //SIN PARENTESIS 
    render(){
      return(
        <div>
            <h1>Contador JSX: {this.props.inicio}</h1>
            <h3 style={{color: 'blue'}}>Valor actual: {this.state.valor}</h3>
            <button onClick={() =>this.incementarNumero()}>Incrementar lambda</button>
            <button onClick={this.incrementarValor}>Incrementar valor</button>
            <button onClick={this.incrementarNumero}>Incrementar numero </button>

        </div>
      )
    }
}

export default Contador;