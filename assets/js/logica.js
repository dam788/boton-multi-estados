// selectores
const boton = document.querySelector('#btn');
const escribir = document.querySelector('#h3');


// variables
let i = 0
const val = [];
    

// funciones
const toggle = (...valores) => {    
    
    for(valor in valores){
        val.push(valores[valor]);
    }
   
    if( i < val.length-1 ){
        return i += 1;
    }
        return i = 0;           
}

const toogleButton = ({target}) => {     
    //agregamos las opciones que queremos al toogle
    toggle('slow','medium','fast');
    
    target.setAttribute('multi-valor', val[i])
    console.log(event.target.getAttribute('multi-valor'));
    escribir.innerHTML = `valor: ${val[i]}`
}


// evento
boton.addEventListener('click', toogleButton);