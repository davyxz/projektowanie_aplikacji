function sprawdz(form) {
    if (document.getElementById('nazw').value.length < 3) {
        ert('Pole Nazwisko musi zawierać co najmniej trzy znaki');
        formazw.focus();
        return false;
    }
    if (document.getElementById('imie').value.length < 2) {
        alert('PlImię musi zawierać co najmniej dwa znaki');
        form.imie.focus);
        return false;
    }
    if (document.getElementById('zawod').value == '') {
        alert('Pole Zawód mu być wypełnione');
        form.zawod.focus();
        return false;
    }
    return true;
}