const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const uro1 = new Date(document.querySelector('#uro1').value);
    const uro2 = new Date(document.querySelector('#uro2').value);
    const im1 = document.querySelector('#imie1').value;
    const im2 = document.querySelector('#imie2').value;
    if(uro1.getTime() < uro2.getTime()){
        wynik.innerHTML = `Starszy jest ${im1}`;
    }
    else if(uro1.getTime() > uro2.getTime()){
        wynik.innerHTML = `Starszy jest ${im2}`;
    }
    else {
        wynik.innerHTML = `${im1} oraz ${im2} są urodzeni w tym samym czasie`;
    }
})