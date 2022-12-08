const liczba_a = document.querySelector("#liczba_a");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    a = parseInt(liczba_a.value);
    switch (true) {
        case (a < 50):
            wynik.innerHTML = 'Jest to ocena 2';
            break;
        case (a>=50 && a<=59):
            wynik.innerHTML = 'Jest to ocena 3';
            break;
        case (a>=60&&a<=69):
            wynik.innerHTML = 'Jest to ocena 3,5';
            break;
        case (a>=70 && a<=79):
            wynik.innerHTML = 'Jest to ocena 4';
            break;
        case (a>=80&&a<=89):
            wynik.innerHTML = 'Jest to ocena 4,5';
            break;
        case(a>=90&& a<=100):
            wynik.innerHTML = 'Jest to ocena 5';
            break;
        case(a>100||a<0):
            wynik.innerHTML = 'Podaj prawidłową liczbę procent';
            break;
    }
});