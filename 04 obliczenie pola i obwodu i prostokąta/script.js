console.log('tEN SKRYPT WYKONAŁ DAWID WILK');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = Number(document.querySelector('#liczba_a').value);
    let b = Number(document.querySelector('#liczba_b').value);
    
    let pole = a * b;
    let obwod = 2*a + 2*b;
    let wynik_tekst = `Długość boku a = ${a}<br> 
                        Długość boku b =${b}<br>
                        Pole prostokąta = ${pole}<br>
                        Obwód prostokąta = ${obwod}<br>
                        `;
    wynik.innerHTML = wynik_tekst;

});