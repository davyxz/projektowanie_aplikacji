const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

function kolor(a, b) {
    if (a < b){
        const ta = a.toString()
        const tb = b.toString()
        return wynik.innerHTML = ta.fontcolor("green") + " " + tb.fontcolor("red")
    }
    else if (a === b) {
        const ta = a.toString()
        const tb = b.toString()
        return wynik.innerHTML = ta.fontcolor("blue") + " " + tb.fontcolor("blue")
    }
    else {
        const ta = a.toString()
        const tb = b.toString()
        return wynik.innerHTML = ta.fontcolor("red") + " " + tb.fontcolor("green")
    }
}
btn.addEventListener('click', function () {
    a = parseInt(liczba_a.value);
    b = parseInt(liczba_b.value);
    wynik.innerHTML = kolor(a, b)
})