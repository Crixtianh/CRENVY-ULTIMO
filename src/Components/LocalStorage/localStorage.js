import react, {useRef} from "react";

function LocalStorage(title,value){
    //const{content}=title;
    let titulo=Object.values(title);//obtenemos el titulo de la cancion
    let valorActual = localStorage.getItem(titulo);//vemos el valor almecenado en el storage

    console.log({value})

    if (valorActual === null){
        localStorage.setItem(titulo,"1")
    }else{
        if(value==="+1"){
            let nuevoVal = parseInt(valorActual)+1
            localStorage.setItem(titulo,nuevoVal.toString())
        }else{
            let nuevoVal = parseInt(valorActual)-1
            localStorage.setItem(titulo,nuevoVal.toString())
        }
    }
    //por probar fallo en dislik <-----

    //let valor={value};

    //localStorage.setItem(titulo,"1");

    
    



    //console.log(title);
    //const ref = {value};
    //const data=useRef();
    /*const handleClick=()=>{
        console.log(data.current.value,{title})
        localStorage.setItem({title},data.current.value)//llave y su valor actual
    }*/
    //console.log(localStorage.getItem("inputValue","****"))

}
export default LocalStorage