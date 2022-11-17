const liczba_a = document.querySelector("#liczba_a");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    a = parseInt(liczba_a.value);
    if(a<0){
    let wyr1 = a*(-1);
    wynik.innerHTML = 'Wartość bewzględna z liczby '+a+' wynosi '+wyr1;
    } else{
        wynik.innerHTML = 'Wartość bewzględna z liczby '+a+' wynosi '+a;
    }
});