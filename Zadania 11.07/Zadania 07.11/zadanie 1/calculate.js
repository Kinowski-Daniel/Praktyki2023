function calculate() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const dzialanie = document.getElementById('dzialanie').value;
    const wynik = document.getElementById('wynik');

    let result;

    switch (dzialanie) {
        case 'dodaj':
            result = liczba1 + liczba2;
            break;
        case 'odejm':
            result = liczba1 - liczba2;
            break;
        case 'mnoz':
            result = liczba1 * liczba2;
            break;
        case 'dziel':
            if (liczba2 === 0) {
                wynik.textContent =  "Nie można dzielić przez zero.";
                
            } else {
                result = liczba1 / liczba2;
            }
            break;
        default: 
            wynik.textContent =  "Nieznane dzialanie.";
    }

    if (!isNaN(result)) {
        wynik.textContent = result;
    }
}