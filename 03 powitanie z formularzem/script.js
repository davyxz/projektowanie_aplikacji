//blok danych
const imie = document.querySelector('#imie');
const wiek = document.querySelector('#wiek');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    //let wynik_teskt = "<h1>Witaj na mojej stronie</h1><br> Masz na imię: " + imie.value + "<br>" + "i masz: " + wiek.value + " lat.";
    let wynik_teskt = `<h1>Cześć ${imie.value} </h1> Miło cię widzieć na mojej stronie, szczególnie że masz ${wiek.value} lat.`;
    console.log(`Cześć ${imie.value} tak naprawdę wcale się nie cieszę.`);
    wynik.innerHTML = wynik_teskt;
});