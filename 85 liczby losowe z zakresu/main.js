const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba_n = document.querySelector("#liczba_n");
const liczba_min = document.querySelector("#liczba_min");
const liczba_max = document.querySelector("#liczba_max");

btn.addEventListener('click', function () {
    let min = parseInt(liczba_min.value);
    let max = parseInt(liczba_max.value);
    let n = parseInt(liczba_n.value);
    wynik.innerHTML = "Liczby wylosowane to: ";
    for (let i = 0; i < n; i++) {
        wynik.innerHTML += `${Math.floor(Math.random() * (max - min + 1) + min)}`+" ";
    }
})