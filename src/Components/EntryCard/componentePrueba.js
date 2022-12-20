import React, {useState} from 'react'


export const PrimerComponente = () => {
    /*una variable con let*/
    //let testVariable = "Esto es una variable a";

    const[testVariable, setVariable] = useState("variable a");

    /*funcion y uso del UseState*/
    const cambiarTest1 = (nuevaVariable) =>{
        setVariable(nuevaVariable);
    }

    return (
    <div>
        <p>¿Que es esto? {testVariable}  </p>
        <p>Ahora probemos las clases en la variable: <strong className={testVariable.length >= 4 ? 'verde':'rojo'}>
        {testVariable} </strong></p>
        <input type="text" onChange={e => cambiarTest1(e.target.value)} placeholder="Ingrese algo" ></input>
        
        <button onClick={ e => cambiarTest1("Ahora es variable b")}>Cambiar variable a la default b</button>

        <button onClick={ e => {console.log("El valor guardado de tu estado es:", testVariable)}}>
        Mostrar valor variable </button>

    </div>
    )
}