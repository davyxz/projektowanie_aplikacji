const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b");
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    a = parseInt(liczba_a.value);
    b = parseInt(liczba_b.value);
    wynik.innerHTML = ``
    for(let i = 0; i < b; i++) {
        for(let j = 0; j < a; j++) {
            wynik.innerHTML += `X`
        }
        wynik.innerHTML += `<br>`
    }
})