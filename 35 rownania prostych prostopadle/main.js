const liczba_a1 = document.querySelector("#liczba_a1");
const liczba_a2 = document.querySelector("#liczba_a2");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    a1 = parseInt(liczba_a1.value);
    a2 = parseInt(liczba_a2.value);
    if (a1*a2==(-1)) {
        wynik.innerHTML = 'Te równania prostych są prostopadłe!';
    } else {
        wynik.innerHTML = "Te równania prostych nie są do siebie prostopadłe!";
    }
});