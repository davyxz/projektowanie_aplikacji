const liczba_a = document.querySelector("#liczba_a");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    a = parseInt(liczba_a.value);
    if (a % 4 == 0 && (a % 100 != 0 || a % 400 == 0))
        wynik.innerHTML = 'Rok ' + a + ' jest przestepny';
    else
        wynik.innerHTML = 'Rok '+a+' nie jest przestepny';
});