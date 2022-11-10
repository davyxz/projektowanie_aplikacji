const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button ');
const liczba = document.querySelector('#liczba');
const procent = document.querySelector('#procent');

btn.addEventListener('click', function() {
    let wartosc = parseInt(liczba.value);
    let pro = parseInt(procent.value);
    let wynik_tekst = " ";
    let wyrazenie = pro/100 * wartosc;
    wynik_tekst += `${pro} % z liczby ${wartosc} wynosi ${wyrazenie}<br>`;
    wynik.innerHTML=wynik_tekst;

});