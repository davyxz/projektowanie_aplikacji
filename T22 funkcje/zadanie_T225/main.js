const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

function euklides(a, b) {
        var reszta;
        while (b) {
            reszta = a % b;
            a = b;
            b = reszta;
        }
        return a;
}

btn.addEventListener('click', function () {
    a = parseInt(liczba_a.value);
    b = parseInt(liczba_b.value);
    wynik.innerHTML = "Największy wspólny dzielnik to: "+euklides(a,b)
})