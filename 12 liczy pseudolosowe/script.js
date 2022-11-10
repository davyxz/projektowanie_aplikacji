const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const mini = document.querySelector('#mini');
const maks = document.querySelector('#maks');

btn.addEventListener('click', function() {

    let max = parseInt(maks.value);
    let min = parseInt(mini.value);
    let wynik_tekst = " ";
    let w1 = Math.floor(Math.random()*(max-min+1)+min);
    let w2 = Math.floor(Math.random()*(max-min+1)+min);
    let w3 = Math.floor(Math.random() * (max - min + 1) + min);
    let w4 = Math.floor(Math.random() * (max - min + 1) + min);
    let w5 = Math.floor(Math.random() * (max - min + 1) + min);
    let suma = w1+w2+w3+w4+w5;
    let iloczyn = w1*w2*w3*w4*w5;
    let srednia = (w1+w2+w3+w4+w5)/5;
    wynik_tekst += ` p1 = ${w1} <br> p2 = ${w2} <br> p3 = ${w3} <br> p4 = ${w4} <br> p5 = ${w5} 
 <br> suma: ${suma}
    <br> iloczyn: ${iloczyn}
    <br> srednia: ${srednia}`;
    wynik.innerHTML = wynik_tekst;
});