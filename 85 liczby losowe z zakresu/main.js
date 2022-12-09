const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const mini = document.querySelector('#mini');
const maks = document.querySelector('#maks');
const ilosc = document.querySelector('#ilosc');

btn.addEventListener('click', function() {

    let max = parseInt(maks.value);
    let min = parseInt(mini.value);
    let ilosc = parseInt(ilosc.value);
    let wynik_tekst = " "
    for (i=0;i<=n;i++){
        wynik_tekst =+
    }

    let w1 = Math.floor(Math.random()*(max-min+1)+min);
    let w2 = Math.floor(Math.random()*(max-min+1)+min);
    let w3 = Math.floor(Math.random() * (max - min + 1) + min);
    let w4 = Math.floor(Math.random() * (max - min + 1) + min);
    let w5 = Math.floor(Math.random() * (max - min + 1) + min);
})