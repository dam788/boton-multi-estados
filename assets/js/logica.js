// selectores
const boton = document.querySelector('#btn');
const escribir = document.querySelector('#h3');


// variables
let i = 0
const val = ['slow', 'medium', 'fast'];
    

// funciones
const valorX = () => {   
    if( i < val.length-1 ){
        return i += 1;
    }
        return i = 0;    
        
}

const toogleButton = ({target}) => {     
    valorX();
    target.setAttribute('multi-valor', val[i])
    console.log(target.getAttribute('multi-valor'));
    escribir.innerHTML = `valor: ${val[i]}`
}


// evento
boton.addEventListener('click', toogleButton);