const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const cale = document.querySelector('#cale');

btn.addEventListener('click', function() {
    let cal = parseInt(cale.value);
    let mm = Math.floor(cal*25,4);
    let wynik_tekst = '';
    wynik_tekst +=`${cal} cali to ${mm} milimetrów`;
    wynik.innerHTML = wynik_tekst;
});