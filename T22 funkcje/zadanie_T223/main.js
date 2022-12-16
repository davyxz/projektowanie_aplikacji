const liczba_x = document.querySelector("#liczba_x");
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

function miesiac(x){
    if (x<13 && x>0)
        switch (x){
            case 1:
                return "styczeń";
            case 2:
                return "luty";
            case 3:
                return "marzec";
            case 4:
                return "kwiecień";
            case 5:
                return "maj";
            case 6:
                return "czerwiec";
            case 7:
                return "lipiec";
            case 8:
                return "sierpień";
            case 9:
                return "wrzesień";
            case 10:
                return "październik";
            case 11:
                return "listopad";
            default:
                return "grudzień";

        }
    else
        return "Podaj liczbe od 1 do 12!"
}
btn.addEventListener('click', function () {
    x = parseInt(liczba_x.value);
   if (x<13 && x>0)
       wynik.innerHTML = 'Jest to '+miesiac(x);
   else wynik.innerHTML = miesiac(x);

});