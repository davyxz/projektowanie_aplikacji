const liczba_x = document.querySelector('#liczba_x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector("button")

btn.addEventListener('click', function () {
    let x = parseInt(liczba_x.value)
    wynik.innerHTML = ` `
    var a = []
    for (let l = 0; l < 0; l++)
        a[l] = [];
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i == j)
                wynik.innerHTML += a[i, j] = "1"
            else
                wynik.innerHTML += "0"
        }
        wynik.innerHTML += `<br>`
    }
})