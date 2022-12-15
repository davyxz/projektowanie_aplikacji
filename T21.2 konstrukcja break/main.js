const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba_a = document.querySelector("#liczba_a");

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value);
    wynik.innerHTML = "liczby: ";
    for (let i = 1; i < 31; i++) {
        if (i > a)
            break;
        else wynik.innerHTML += `${i}` + " ";
    }
})