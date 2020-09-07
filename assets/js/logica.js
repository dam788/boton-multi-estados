/*
   ********** CLOSURES ***********
*/

// selectores
const boton1 = document.querySelector('#btn1')
const boton2 = document.querySelector('#btn2')
const boton3 = document.querySelector('#btn3')
const text = document.querySelector('#h3');

function toggle(...vals) {
  let unset = {}
  let cur = unset

  return function next() {
    if (cur != unset) {
      vals.push(cur)
    }
    cur = vals.shift()
    text.innerHTML = `${cur}`;
    return cur
  }
}

let onOff = toggle('off', 'on')
let velocity = toggle('slow','medium','fast')
let names = toggle('Hugo', 'Mauro', 'Rodrigo','Dami','Jona','Nacho')

// eventos
boton1.addEventListener('click', onOff);
boton2.addEventListener('click', velocity);
boton3.addEventListener('click', names);
