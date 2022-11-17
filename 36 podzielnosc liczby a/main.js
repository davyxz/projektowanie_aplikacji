const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    a = parseInt(liczba_a.value);
    b = parseInt(liczba_b.value);
    if(a%b==0){
    wynik.innerHTML = 'Liczba A jest podzielna przez B';
    } else {
        if(b===0){
            wynik.innerHTML = 'Nie dzielimy przez zero!!!';
        } else {
            wynik.innerHTML = 'Liczba A nie jest podzielna przez B';
        }
    }

});