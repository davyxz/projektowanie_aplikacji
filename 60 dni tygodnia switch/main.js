const liczba_a = document.querySelector("#liczba_a");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    a = parseInt(liczba_a.value);
    if (a<8 && a>0)
        switch (a){
            case 1:
        wynik.innerHTML = 'Poniedziałek';
    break;
            case 2:
        wynik.innerHTML = 'Wtorek';
    break;
            case 3:
        wynik.innerHTML = 'Środa';
    break;
            case 4:
        wynik.innerHTML = 'Czwartek';
                break;
            case 5:
        wynik.innerHTML = 'Piątek';
    break;
            case 6:
        wynik.innerHTML = 'Sobota';
    break;
            case 7:
        wynik.innerHTML = 'Niedziela';
    }
    else
        wynik.innerHTML = 'Podaj liczbe od 1 do 7!!!';
});