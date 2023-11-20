const books = [
  {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
  {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
  {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
  {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
  {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
  {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
  {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data);

const filtr = books => books.filter(book => book.pages % 2 === 0 && book.genre.endsWith('y'));

const ogranicz = books => books.reduce((acc, book) => acc + book.title.replace(/\s/g, '').length, 0);

const filtr2 = books => books.filter(book => book.pages % 2 !== 0 && /\d/.test(book.title) && book.rating > 5)
    
const dlugosc = books => books.length;

const sortedTitles = books => books.map(book => book.title);
  
const sortowanie  = books => {books.sort((a, b) => b.length - a.length); return sortedTitles[1] || '';};

const wynik6 = compose(filtr,ogranicz)(books);
console.log('Ilość liter w tytułach spełniających kryteria:', wynik6);

const wynik7 = compose(filtr2,dlugosc)(books);
console.log('Ilość książek spełniających kryteria:', wynik7);

const wynik8 = compose(sortedTitles,sortowanie)(books);
console.log('Drugi najdłuższy tytuł:', wynik8);

const zadanie9 = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Udało się!');
      }, 5000);
    });

    promise.then((result) => {
      console.log(result);
    });
  };

  
  const zadanie10 = () => {
    const liczenie = (x, y) => {
      return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
          reject(new Error('Jeden z argumentów nie jest liczbą!'));
        } else {
          const result = x * y;
          resolve(result);
        }
      });
    };

    liczenie(5, 10)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

 
  const zadanie11 = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Błąd! Status nie jest równy 200');
        }
      })
      .then((data) => {
        data.forEach(({ title, body }) => {
          console.log('Tytuł:', title);
          console.log('Body:', body);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
