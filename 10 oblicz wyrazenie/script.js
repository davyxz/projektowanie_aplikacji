const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba_x = document.querySelector('#liczba_x');

btn.addEventListener('click', function() {
    let x = parseInt(liczba_x.value);
    let wynik_tekst = " ";
    let wyrazenie = Math.pow(x,2)/(1+Math.abs(x))**2;
    wynik_tekst +=`Wynik wyrazenia jest równe ${wyrazenie}<br>`;
    wynik.innerHTML = wynik_tekst;
});