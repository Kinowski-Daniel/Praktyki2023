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
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
