const liczba_a = document.querySelector("#liczba_a");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    a = parseInt(liczba_a.value);
    if (a>9 && a<100) {
        if (a % 2 == 0)
            wynik.innerHTML = 'Liczba jest dwucyfrowa, jest parzysta.';
        else
            wynik.innerHTML = 'Liczba jest dwucyfrowa, nie jest parzysta.';
    }
    else {
            wynik.innerHTML = 'Liczba nie jest dwucyfrowa';
    }
});