function wyfiltrujElement(tablica, elementDoWyfiltrowania) {
      var wynikowaTablica = [];

      for (var i = 0; i < tablica.length; i++) {
        if (tablica[i] === elementDoWyfiltrowania) {
          wynikowaTablica.push(tablica[i]);
        }
      }

      return wynikowaTablica;
    }

    function filtrujIWyświetl() {
      var x = [10, 11, "ania", 11];
      var f = 11;
      var wynik = wyfiltrujElement(x, f);
      
      // Wyświetlenie wyniku w paragrafie
      var wynikParagraf = document.getElementById("wynikParagraf");
      wynikParagraf.textContent = "Wynik: " + wynik;
    }
