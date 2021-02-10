let books = document.querySelectorAll('.book');

//--Восстановить порядок книг.
console.log(books[5]);
books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

//--Заменить картинку заднего фона на другую из папки image
let bodyElement = document.body;
bodyElement.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
console.log(bodyElement);

//--Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let text = books[4].querySelector('h2 a').innerText.replace('Пропо', 'Прото');
books[4].querySelector('h2 a').innerText = text;

//--Удалить рекламу со страницы
document.querySelector('.adv').remove();

//--Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
//-- 2 book
let liElems = books[0].querySelectorAll('li');
liElems[9].after(liElems[2]);
liElems[3].after(liElems[6]);
liElems[4].before(liElems[8]);

//-- 5 book
liElems = books[5].querySelectorAll('li');
console.log(liElems);
liElems[1].after(liElems[9]);
liElems[4].after(liElems[2]);
liElems[7].after(liElems[5]);

//--в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let liItem = books[2].querySelectorAll('li')[8];
liItem.insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
