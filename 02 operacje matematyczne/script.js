let liczba_1 = parseInt(prompt("Podaj pierwszą liczbe","0"));
let liczba_2 = parseInt(prompt("Podaj drugą liczbe","0"));

let wynik = liczba_1 + liczba_2;
document.write(liczba_1 + " + " + liczba_2 + " = " + wynik + "</br>");

let wynik_1 = liczba_1 - liczba_2;
document.write(liczba_1 + " - " + liczba_2 + " = " + wynik_1 + "</br>");

let wynik_2 = liczba_1 * liczba_2;
document.write(liczba_1 + " * " + liczba_2 + " = " + wynik_2 + "</br>");

if(liczba_2 === 0) {
    let wynik_3 = "Nie dzielimy przez zero !!!";
    document.write(wynik_3);
} else {
    let wynik_3 = liczba_1 / liczba_2;
    document.write(liczba_1 + " / " + liczba_2 + " = " + wynik_3 + "</br>");
}







