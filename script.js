console.log('hello world!')

const bigTitle = document.querySelector('.big-title');

bigTitle.innerHTML = "<div>Element to be styled</div>";

bigTitle.style.fontSize = '100px';

const bigTitle = document.querySelectorAll('.big-title');
console.log('bigTitles', bigTitles);

const secondBigTitle = bigTitles[1];
secondBigTitle.style.backgroundColor = 'blue';

const image = document.querySelector('img');
image.src = ''

const h6 = document.querySelector('#a-header');
console.log(h6);