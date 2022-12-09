const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const mini = document.querySelector('#mini');
const maks = document.querySelector('#maks');
const licz_n = document.querySelector('#licz_n');

btn.addEventListener('click', function() {

    wynik.innerHTML=``
    let max = parseInt(maks.value);
    let min = parseInt(mini.value);
    let n = parseInt(licz_n.value);
   for ( let i=0; i<n;i++){
       wynik.innerHTML +=`{$Math.floor(Math.random() * (max - min + 1) + min)}`
   }
})