const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    a = parseInt(liczba_a.value);
    b = parseInt(liczba_b.value);
    if(a>b){
        wynik.innerHTML = 'Liczba a jest większa od liczby b';
    } else {
        if (a<b){
            wynik.innerHTML = 'Liczba b jest większa od liczby a';
        } else{
            wynik.innerHTML = 'Nie ma większej liczby, są one równe!!!';
        }
    }
})