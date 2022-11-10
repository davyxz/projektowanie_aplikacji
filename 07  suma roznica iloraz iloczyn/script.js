const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let wynik_tekst = '';

    let suma = a+b;
    wynik_tekst+=`Suma liczb ${a} i ${b} wynosi ${suma}<br>`;

    let roznica = a-b;
    wynik_tekst+=`Róznica liczb ${a} i ${b} wynosi ${roznica}<br>`;

    let iloczyn = a*b;
    wynik_tekst+=`Iloczyn liczb ${a} i ${b} wynosi ${iloczyn}<br>`;

    if(b===0){
        wynik_tekst+= `NIE DZIELIMY PRZEZ ZERO!!!<br>`;
    }
    else{
        let iloraz = Math.floor(a/b);
        wynik_tekst+=`Iloraz liczb ${a} i ${b} wynosi ${iloraz}<br>`;
        let reszta = a%b;
        wynik_tekst+=`Reszta z dzielenia liczb ${a} i ${b} wynosi ${reszta}<br>`;
    }
    wynik.innerHTML = wynik_tekst;
});






    /*let iloraz;
    let iloczyn;
    let różnica;

    let wynik_tekst1 = "";
    let wynik_tekst2 = "";
    let wynik_tekst3 = "";
    let wynik_tekst4 = "";

    suma = (Number(liczba_a.value) + Number(liczba_b.value));
    wynik_tekst1 = `suma = ${suma}<br>`;

    różnica = (Number(liczba_a.value) - Number(liczba_b.value));
    wynik_tekst2 = `różnica = ${różnica} <br> `;

    iloczyn = (Number(liczba_a.value) * Number(liczba_b.value));
    wynik_tekst3 = `iloczyn = ${iloczyn} <br> `;


    if(Number(liczba_b.value)===0){
        wynik_tekst4= "Nie dzielę przez zero";
    }
    else{
        iloraz = (Number(liczba_a.value) / Number(liczba_b.value));
        wynik_tekst4 = `iloraz = ${iloraz} <br> `;
    }


    wynik.innerHTML = wynik_tekst1 + wynik_tekst2 + wynik_tekst3 + wynik_tekst4;

});*/