const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba_x = document.querySelector('#liczba_x');

btn.addEventListener('click', function () {
    let x = parseInt(liczba_x.value);
    let wynik_tekst = " ";
    let odp0 = Math.floor(x) * 0;
    let odp1 = Math.floor(x) * 1;
    let odp2 = Math.floor(x) * 2;
    let odp3 = Math.floor(x) * 3;
    let odp4 = Math.floor(x) * 4;
    let odp5 = Math.floor(x) * 5;
    let odp6 = Math.floor(x) * 6;
    let odp7 = Math.floor(x) * 7;
    let odp8 = Math.floor(x) * 8;
    let odp9 = Math.floor(x) * 9;
    let odp10 = Math.floor(x) * 10;
    wynik_tekst += `x = ${x} <br> ${x} x 0 = ${odp0} <br> ${x} x 1 = ${odp1} <br> ${x} x 2 = ${odp2} <br> ${x} x 3 = ${odp3} 
<br> ${x} x 4 = ${odp4} <br> ${x} x 5 = ${odp5} <br> ${x} x 6 = ${odp6} <br> ${x} x 7 = ${odp7} <br> ${x} x 8 = ${odp8} 
<br> ${x} x 9 = ${odp9} <br> ${x} x 10 = ${odp10}`;
    wynik.innerHTML = wynik_tekst;
});
