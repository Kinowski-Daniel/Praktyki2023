//Poprzednia wersja
/*function sprawdz() {
    const text = document.getElementById('text').value;
    const resultElement = document.getElementById('wynik');

    if (palindrome(text)) {
        resultElement.textContent = "To jest palindrom";
    } else {
        resultElement.textContent = "To nie jest palindrom";
    }
}

function palindrome(str) {
    str = str.replace(/ /g, "").toLowerCase();
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}*/

//Nowa wersja
function sprawdz() {
    const text = document.getElementById('text').value;
    const resultElement = document.getElementById('wynik');

    if (palindrome(text)) {
        resultElement.textContent = "To jest palindrom";
    } else {
        resultElement.textContent = "To nie jest palindrom";
    }
}

function palindrome(str) {
    str = str.replace(/ /g, "").toLowerCase();
    const len = str.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}


