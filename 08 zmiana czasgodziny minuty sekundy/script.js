const wynik = document.querySelector('#wynik');
const sekundy = document.querySelector('#sekundy');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let ss = parseInt(sekundy.value);
    let wynik_tekst = '';
    let g = Math.floor(ss / 3600);
    wynik_tekst+=`${g} g `;
    let sekundy_cale = ss % 3600;
    let m = Math.floor(sekundy_cale / 60);
    wynik_tekst+=`${m} m `;
    let s = sekundy_cale % 60;
    wynik_tekst+=`${s} s `;
    wynik.innerHTML = wynik_tekst;
})

