/*
   ********** CLOSURES ***********
*/

// selectores
const boton1 = document.querySelector('#btn1')
const text = document.querySelector('#h3');

function once(fn) {
  let ejec  = false;
  console.log(ejec)
  return function inicioJuego(){
    
    if(ejec){
      console.log('Nop! solo una vez!!');
      return null;
    }
    
    if(typeof fn === 'function'){
      ejec = true;
      console.log(ejec);
      finDelJuego('ganaste!!');   
    }
  }
}

function finDelJuego(val) {
  console.log(val)
    return val;
}



// eventos
let initGame = once(finDelJuego);

// eventos
boton1.addEventListener('click', initGame);
